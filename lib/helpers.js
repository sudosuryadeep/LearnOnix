const fs = require("fs");
const path = require("path");

function createFolders(basePath) {
    ["LearnOnixContent", "styles", "scripts"].forEach((folder) => {
        const dir = path.join(basePath, folder);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`📁 ${folder} folder created.`);
        }
    });
}

function copyContentFiles(destination) {
    const contentDir = path.join(__dirname, "..", "content");
    const files = fs.readdirSync(contentDir);

    files.forEach((file) => {
        const ext = path.extname(file);
        const destFolder =
            ext === ".html" ? "" : ext === ".css" ? "styles" : ext === ".js" ? "scripts" : "";

        const srcPath = path.join(contentDir, file);
        const destPath = path.join(destination, destFolder, file);

        fs.copyFileSync(srcPath, destPath);

        const emoji =
            ext === ".html" ? "✅ HTML" : ext === ".css" ? "🎨 CSS" : ext === ".js" ? "🧠 JS" : "📄";

        console.log(`${emoji} copied: ${file}`);
    });

    fs.writeFileSync(path.join(destination, "welcome.txt"), "Welcome to LearnOnix!");
    fs.writeFileSync(path.join(destination, "modules.html"), "<!-- Your modules list -->");
}

module.exports = { createFolders, copyContentFiles };
