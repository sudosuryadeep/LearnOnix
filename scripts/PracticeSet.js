// Practice questions array
const questions = [
    {
        title: "🔢 Reverse a Number",
        description: "Write a function that takes a number and returns its reverse. Example: 123 → 321",
        solution: `function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}
// Example:
console.log(reverseNumber(123)); // 321`
    },
    {
        title: "🔁 Palindrome Checker",
        description: "Check whether a given string is a palindrome. Example: 'madam' → true",
        solution: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
// Example:
console.log(isPalindrome("madam")); // true`
    },
    {
        title: "📦 Find Duplicates in Array",
        description: "Given an array, return the duplicates as a new array.",
        solution: `function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  for (let item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    }
    seen.add(item);
  }
  return [...duplicates];
}
// Example:
console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5])); // [2, 4]`
    }
];

// Inject questions into the DOM
const container = document.getElementById('practice-questions');

questions.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';

    card.innerHTML = `
    <h3>${q.title}</h3>
    <p>${q.description}</p>
    <button class="toggle-btn" onclick="toggleSolution(${index})">Show Solution</button>
    <pre class="solution" id="solution-${index}">${q.solution}</pre>
  `;

    container.appendChild(card);
});

// Toggle visibility
function toggleSolution(index) {
    const sol = document.getElementById(`solution-${index}`);
    if (sol.style.display === 'block') {
        sol.style.display = 'none';
    } else {
        sol.style.display = 'block';
    }
}
