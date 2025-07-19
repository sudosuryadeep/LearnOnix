#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const { spawn } = require("child_process");

console.clear();
console.log(`🔵🔵🔵 Welcome to LearnOnix Installer 🔵🔵🔵\n`);

(async () => {
    // Step 1: Ask for install location (optional, if you want to move something in future)
    const { installPath } = await inquirer.prompt([
        {
            type: "input",
            name: "installPath",
            message: "📁 (Optional) Enter a path to set up LearnOnix workspace:",
            default: path.join(process.cwd(), "LearnOnixData"),
        },
    ]);

    const finalPath = path.resolve(installPath);

    // Create the folder (optional logic, you can remove if not needed)
    if (!fs.existsSync(finalPath)) {
        fs.mkdirSync(finalPath, { recursive: true });
        console.log(`📁 Workspace created at: ${finalPath}`);
    }

    // Step 2: Run LearnOnix.exe
    const exePath = path.join(__dirname, "learnonix.exe");

    if (fs.existsSync(exePath)) {
        const { runExe } = await inquirer.prompt([
            {
                type: "confirm",
                name: "runExe",
                message: "🚀 Do you want to launch LearnOnix.exe now?",
                default: true,
            },
        ]);

        if (runExe) {
            const needsQuotes = /\s/.test(exePath);
            const safePath = needsQuotes ? `"${exePath}"` : exePath;

            const exe = spawn(safePath, [], { stdio: "inherit", shell: true });

            exe.on("exit", (code) => {
                console.log(`✅ LearnOnix.exe exited with code ${code}`);
            });

            exe.on("error", (err) => {
                console.error("❌ Error running learnonix.exe:", err.message);
            });
        }
    } else {
        console.log("❗ learnonix.exe not found in /bin. Please make sure it's placed correctly.");
    }
})();
