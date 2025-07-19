const modules = [
    {
        title: "HTML Basics",
        video: "assets/html-intro.mp4",
        pdf: "assets/html-guide.pdf",
        note: "Introduction to HTML structure, tags, attributes.",
        completed: false
    },
    {
        title: "CSS Fundamentals",
        video: "assets/css-styling.mp4",
        pdf: "assets/css-reference.pdf",
        note: "CSS selectors, colors, box model, and Flexbox.",
        completed: false
    },
    {
        title: "JavaScript Essentials",
        video: "assets/js-basics.mp4",
        pdf: "assets/js-notes.pdf",
        note: "Variables, data types, loops, functions.",
        completed: false
    },
    {
        title: "DOM & Events",
        video: "assets/dom-events.mp4",
        pdf: "assets/dom-cheatsheet.pdf",
        note: "DOM tree, selectors, event listeners.",
        completed: false
    },
    {
        title: "React Fundamentals",
        video: "assets/react-intro.mp4",
        pdf: "assets/react-guide.pdf",
        note: "Components, props, state, JSX.",
        completed: false
    }
];

function renderModules() {
    const container = document.getElementById("courseModules");
    container.innerHTML = "";

    modules.forEach((mod, index) => {
        const div = document.createElement("div");
        div.className = `module ${mod.completed ? 'completed' : ''}`;

        div.innerHTML = `
      <div class="module-header">
        <h3>${mod.title}</h3>
        <button onclick="toggleComplete(${index})">
          ${mod.completed ? '✅ Completed' : '✔️ Mark Complete'}
        </button>
      </div>
      <div class="module-content">
        <p>📘 <strong>Description:</strong> ${mod.note}</p>
        <p>🎬 <a href="${mod.video}" target="_blank">Watch Video</a></p>
        <p>📄 <a href="${mod.pdf}" target="_blank">Download PDF</a></p>
      </div>
    `;

        container.appendChild(div);
    });

    updateProgress();
}

function toggleComplete(index) {
    modules[index].completed = !modules[index].completed;
    renderModules();
}

function updateProgress() {
    const total = modules.length;
    const completed = modules.filter(m => m.completed).length;
    const percent = Math.round((completed / total) * 100);
    document.getElementById("courseProgress").value = percent;
    document.getElementById("progressText").textContent = `${percent}% Complete`;
}

document.addEventListener("DOMContentLoaded", renderModules);
