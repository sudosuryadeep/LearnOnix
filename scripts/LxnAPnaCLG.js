const materials = [
    {
        title: "C++ Basics Notes",
        file: "assets/cpp-basics.pdf"
    },
    {
        title: "Java OOPs & Inheritance",
        file: "assets/java-oops.pdf"
    },
    {
        title: "DSA Sheet (450 Questions)",
        file: "assets/dsa-sheet.pdf"
    },
    {
        title: "Apna College Projects Guide",
        file: "assets/projects-guide.pdf"
    },
    {
        title: "Resume & Interview Kit",
        file: "assets/interview-kit.pdf"
    }
];

function loadMaterials() {
    const container = document.getElementById("materials");

    materials.forEach(note => {
        const div = document.createElement("div");
        div.className = "material-item";

        div.innerHTML = `
      <div class="material-title">${note.title}</div>
      <div class="material-actions">
        <a href="${note.file}" download>Download</a>
        <a href="${note.file}" target="_blank">View</a>
      </div>
    `;

        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", loadMaterials);
