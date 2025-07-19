const codeSnippets = [
    {
        title: "HTML Form Example",
        category: "HTML",
        code: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <button type="submit">Submit</button>
</form>`,
        file: "assets/html-form-example.txt"
    },
    {
        title: "CSS Flexbox Centering",
        category: "CSS",
        code: `.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
        file: "assets/css-flexbox.txt"
    },
    {
        title: "JavaScript Countdown Timer",
        category: "JavaScript",
        code: `let count = 10;
const timer = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) clearInterval(timer);
}, 1000);`,
        file: "assets/js-timer.txt"
    },
    {
        title: "React Functional Component",
        category: "React",
        code: `import React from 'react';

function Hello() {
  return <h1>Hello, world!</h1>;
}

export default Hello;`,
        file: "assets/react-component.txt"
    },
    {
        title: "JS Array Map Function",
        category: "JavaScript",
        code: `const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);
console.log(squared);`,
        file: "assets/js-array-map.txt"
    }
];

function renderSnippets(filter = "All") {
    const container = document.getElementById("codeList");
    container.innerHTML = "";

    const filtered = filter === "All"
        ? codeSnippets
        : codeSnippets.filter(snippet => snippet.category === filter);

    filtered.forEach(snippet => {
        const card = document.createElement("div");
        card.className = "code-card";

        card.innerHTML = `
      <div class="code-header">
        <span class="code-title">${snippet.title}</span>
        <span class="code-category">${snippet.category}</span>
      </div>
      <pre class="code-snippet">${snippet.code}</pre>
      <a href="${snippet.file}" class="download-link" download>⬇️ Download Code</a>
    `;

        container.appendChild(card);
    });
}

document.getElementById("codeFilter").addEventListener("change", (e) => {
    renderSnippets(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
    renderSnippets(); // Load all on start
});
