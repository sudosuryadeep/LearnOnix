document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("doubtForm");
    const nameInput = document.getElementById("name");
    const categoryInput = document.getElementById("category");
    const questionInput = document.getElementById("question");
    const doubtsContainer = document.getElementById("doubtsContainer");
    const filterCategory = document.getElementById("filterCategory");

    let doubts = JSON.parse(localStorage.getItem("doubts")) || [];

    function saveToLocalStorage() {
        localStorage.setItem("doubts", JSON.stringify(doubts));
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const doubt = {
            id: Date.now(),
            name: nameInput.value.trim(),
            category: categoryInput.value,
            question: questionInput.value.trim(),
            solved: false,
        };

        doubts.push(doubt);
        saveToLocalStorage();
        renderDoubts();
        form.reset();
    });

    function renderDoubts() {
        const selectedCategory = filterCategory.value;
        doubtsContainer.innerHTML = "";

        let filtered = doubts;
        if (selectedCategory !== "All") {
            filtered = doubts.filter((d) => d.category === selectedCategory);
        }

        if (filtered.length === 0) {
            doubtsContainer.innerHTML = "<p>No doubts found for selected category.</p>";
            return;
        }

        filtered.forEach((doubt) => {
            const card = document.createElement("div");
            card.className = "doubt-card";
            if (doubt.solved) card.classList.add("solved");

            card.innerHTML = `
        <div class="doubt-meta">
          🧑 <strong>${doubt.name}</strong> | 📂 <em>${doubt.category}</em> | 🆔 ${doubt.id}
        </div>
        <div class="doubt-text">
          ❓ ${doubt.question}
        </div>
        <button class="solve-btn" onclick="toggleSolved(${doubt.id})">
          ${doubt.solved ? "Undo" : "Mark as Solved"}
        </button>
      `;

            doubtsContainer.appendChild(card);
        });
    }

    window.toggleSolved = function (id) {
        doubts = doubts.map((d) =>
            d.id === id ? { ...d, solved: !d.solved } : d
        );
        saveToLocalStorage();
        renderDoubts();
    };

    filterCategory.addEventListener("change", renderDoubts);

    renderDoubts();
});
