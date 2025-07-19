const courseData = {
    upsc: {
        title: "UPSC Preparation",
        content: `
      <h2>UPSC Preparation</h2>
      <ul>
        <li><a href="assets/videos/upsc_intro.mp4">📽️ Introduction Video</a></li>
        <li><a href="assets/pdfs/upsc_syllabus.pdf">📄 UPSC Syllabus PDF</a></li>
        <li><a href="#">📘 Notes on Polity</a></li>
      </ul>
    `
    },
    jee: {
        title: "JEE Crash Course",
        content: `
      <h2>JEE Crash Course</h2>
      <ul>
        <li><a href="assets/videos/jee_math.mp4">📽️ Math - Integration</a></li>
        <li><a href="assets/pdfs/jee_formula_sheet.pdf">📄 Formula Sheet</a></li>
      </ul>
    `
    },
    neet: {
        title: "NEET Biology Mastery",
        content: `
      <h2>NEET Biology Mastery</h2>
      <ul>
        <li><a href="assets/videos/neet_biology.mp4">📽️ Animal Kingdom</a></li>
        <li><a href="assets/pdfs/neet_diagrams.pdf">📄 Biology Diagrams</a></li>
      </ul>
    `
    },
    skill: {
        title: "Skill Development Courses",
        content: `
      <h2>Skill Courses</h2>
      <ul>
        <li><a href="assets/videos/web_dev.mp4">💻 Web Development</a></li>
        <li><a href="assets/pdfs/python_guide.pdf">🐍 Python Basics PDF</a></li>
      </ul>
    `
    }
};

const buttons = document.querySelectorAll('#courseTabs button');
const content = document.getElementById('courseContent');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const course = btn.dataset.course;
        if (courseData[course]) {
            content.innerHTML = courseData[course].content;
        }
    });
});
