const notesData = [
    {
        category: "HTML Basics",
        notes: [
            {
                title: "HTML Structure Guide",
                file: "assets/html-structure.pdf"
            },
            {
                title: "HTML Tags Summary",
                file: "assets/html-tags.pdf"
            }
        ]
    },
    {
        category: "CSS Design",
        notes: [
            {
                title: "CSS Flexbox Notes",
                file: "assets/css-flexbox.pdf"
            },
            {
                title: "CSS Grid Cheatsheet",
                file: "assets/css-grid.pdf"
            }
        ]
    },
    {
        category: "JavaScript Essentials",
        notes: [
            {
                title: "JS DOM Quick Notes",
                file: "assets/js-dom.pdf"
            },
            {
                title: "Event Handling in JS",
                file: "assets/js-events.pdf"
            }
        ]
    },
    {
        category: "React & Advanced Topics",
        notes: [
            {
                title: "React Components PDF",
                file: "assets/react-components.pdf"
            },
            {
                title: "React State & Props",
                file: "assets/react-state.pdf"
            }
        ]
    },
    {
        category: "Bonus Notes & Projects",
        notes: [
            {
                title: "Interview Cheatsheet",
                file: "assets/interview.pdf"
            },
            {
                title: "Mini Projects Ideas",
                file: "assets/mini-projects.pdf"
            }
        ]
    }
];

function renderNotes() {
    const section = document.getElementById("notes-section");

    notesData.forEach(group => {
        const categoryBlock = document.createElement("div");
        categoryBlock.className = "note-category";

        const categoryHeading = document.createElement("h2");
        categoryHeading.textContent = group.category;

        const notesList = group.notes.map(note => {
            return `
        <div class="note-item">
          <span class="note-title">${note.title}</span>
          <div class="note-actions">
            <a href="${note.file}" download>Download</a>
            <a href="${note.file}" target="_blank">View</a>
          </div>
        </div>
      `;
        }).join("");

        categoryBlock.innerHTML = `
      ${categoryHeading.outerHTML}
      ${notesList}
    `;

        section.appendChild(categoryBlock);
    });
}

document.addEventListener("DOMContentLoaded", renderNotes);
