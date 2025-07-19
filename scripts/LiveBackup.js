const materials = [
    {
        title: "Live Class - React Hooks Intro",
        file: "assets/react-hooks-intro.mp4"
    },
    {
        title: "Class Notes - JavaScript ES6",
        file: "assets/js-es6-notes.pdf"
    },
    {
        title: "Code Snippets - Async Await",
        file: "assets/async-snippets.txt"
    },
    {
        title: "HTML + CSS Bootcamp Day 1",
        file: "assets/html-css-day1.mp4"
    },
    {
        title: "Assignment PDF - Flexbox Challenge",
        file: "assets/flexbox-challenge.pdf"
    }
];

function loadBackupMaterials() {
    const container = document.getElementById("backup-materials");

    materials.forEach(item => {
        const div = document.createElement("div");
        div.className = "material-item";

        div.innerHTML = `
      <div class="material-title">${item.title}</div>
      <div class="material-actions">
        <a href="${item.file}" download>Download</a>
        <a href="${item.file}" target="_blank">View</a>
      </div>
    `;

        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", loadBackupMaterials);
