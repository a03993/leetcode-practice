const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const README_PATH = path.join(ROOT, "README.md");
const IGNORED_DIRS = ["scripts", "node_modules", ".git", ".DS_Store"];

const categories = fs.readdirSync(ROOT).filter((dir) => {
  const fullPath = path.join(ROOT, dir);
  return (
    fs.statSync(fullPath).isDirectory() &&
    !IGNORED_DIRS.includes(dir) &&
    !dir.startsWith(".")
  );
});

const summaryRows = [];

categories.forEach((category) => {
  const categoryPath = path.join(ROOT, category);
  const problems = fs
    .readdirSync(categoryPath)
    .filter(
      (f) =>
        /^\d{4}-/.test(f) &&
        fs.statSync(path.join(categoryPath, f)).isDirectory()
    );

  if (problems.length === 0) return;

  const rows = [];

  problems
    .sort((a, b) => {
      const numA = parseInt(a.match(/^(\d{4})-/)[1], 10);
      const numB = parseInt(b.match(/^(\d{4})-/)[1], 10);
      return numA - numB;
    })
    .forEach((folder) => {
      const match = folder.match(/^(\d{4})-(.+)$/);
      if (!match) return;

      const [_, id, slug] = match;
      const title = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      const folderFullPath = path.join(categoryPath, folder);
      const folderPath = path.relative(categoryPath, folderFullPath);

      const readmePath = path.join(folderFullPath, "README.md");

      console.log("📄 Checking:", folderPath);

      const code = fileLinkIfExists(
        categoryPath,
        folderPath,
        "solution.js",
        "Code"
      );
      const note = fileLinkIfExists(
        categoryPath,
        folderPath,
        "README.md",
        "Note"
      );
      const difficulty = getDifficulty(readmePath);

      rows.push(`| ${id} | ${title} | ${difficulty} | ${code} | ${note} |`);
    });

  const categoryReadme = `# ${capitalize(category)} Problems

| ID | Title | Difficulty | Code | Note |
|----|-------|------------|------|------|
${rows.join("\n")}
`;

  fs.writeFileSync(
    path.join(categoryPath, "README.md"),
    categoryReadme,
    "utf-8"
  );

  summaryRows.push(`- [${capitalize(category)}](./${category}/README.md)`);
});

const mainReadme = `# LeetCode Practice

This is my LeetCode solution notes organized by "category" for quick reference and review.

## 📂 Category

${summaryRows.join("\n")}
`;

fs.writeFileSync(README_PATH, mainReadme, "utf-8");

console.log("✅ README.md updated");
console.log(`📚 ${categories.length} categories processed.`);

function getDifficulty(readmePath) {
  if (!fs.existsSync(readmePath)) {
    console.log("❌ README.md not found:", readmePath);
    return "Unknown";
  }

  const content = fs.readFileSync(readmePath, "utf-8");

  const match = content.match(/^##\s*difficulty\s*:?\s*\n+([^\n#]+)/im);
  if (match) {
    const level = match[1].trim().toLowerCase();
    return level.charAt(0).toUpperCase() + level.slice(1);
  }

  console.log("⚠️ Difficulty not matched in:", readmePath);
  return "Unknown";
}

function fileLinkIfExists(basePath, relativeFolderPath, fileName, linkText) {
  const absolutePath = path.join(basePath, relativeFolderPath, fileName);

  if (fs.existsSync(absolutePath)) {
    return `[${linkText}](${relativeFolderPath}/${fileName})`;
  }

  return "";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
