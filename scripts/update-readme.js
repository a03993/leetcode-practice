const fs = require("fs");
const path = require("path");

// 取得根目錄, 取得最外層的 README 路徑, 忽略的資料夾
const ROOT = path.resolve(__dirname, "..");
const README_PATH = path.join(ROOT, "README.md");
const IGNORED_DIRS = ["scripts", "node_modules", ".git", ".DS_Store"];

// 取得所有分類資料夾
const categories = fs.readdirSync(ROOT).filter((dir) => {
  const fullPath = path.join(ROOT, dir);
  return (
    fs.statSync(fullPath).isDirectory() &&
    !IGNORED_DIRS.includes(dir) &&
    !dir.startsWith(".")
  );
});

const summaryRows = [];
let totalProblems = 0;

categories.forEach((category) => {
  const categoryPath = path.join(ROOT, category);

  // 找出分類下的所有題目資料夾
  const problems = fs
    .readdirSync(categoryPath)
    .filter(
      (f) =>
        /^\d{4}-/.test(f) &&
        fs.statSync(path.join(categoryPath, f)).isDirectory()
    );

  if (problems.length === 0) return;

  console.log(`\n📂 Processing category: ${category}`);

  const rows = [];

  // 將題目資料夾按照題目 ID 排序
  problems
    .sort((a, b) => {
      const numA = parseInt(a.match(/^(\d{4})-/)[1], 10);
      const numB = parseInt(b.match(/^(\d{4})-/)[1], 10);
      return numA - numB;
    })
    .forEach((folder) => {
      const match = folder.match(/^(\d{4})-(.+)$/);
      if (!match) return;

      // 取得題目 ID 和題目名稱
      const [_, id, slug] = match;
      const title = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      // 取得題目資料夾的完整路徑, 資料夾的相對路徑, README.md 的路徑
      const folderFullPath = path.join(categoryPath, folder);
      const folderPath = path.relative(categoryPath, folderFullPath);
      const readmePath = path.join(folderFullPath, "README.md");

      console.log(`  📄 [${id}] ${title}`);

      // 取得題目程式碼的連結
      const code = fileLinkIfExists(
        categoryPath,
        folderPath,
        "solution.js",
        "Code"
      );

      // 取得題目筆記的連結
      const note = fileLinkIfExists(
        categoryPath,
        folderPath,
        "README.md",
        "Note"
      );

      // 取得題目難度
      const difficulty = getDifficulty(readmePath, folder);

      rows.push(`| ${id} | ${title} | ${difficulty} | ${code} | ${note} |`);
      totalProblems++;
    });

  const categoryReadme = `# ${capitalize(category)} Problems

| ID | Title | Difficulty | Code | Note |
|----|-------|------------|------|------|
${rows.join("\n")}
`;

  // 寫入分類的 README
  writeIfChanged(path.join(categoryPath, "README.md"), categoryReadme);

  // 更新最外層的 README
  summaryRows.push(`- [${capitalize(category)}](./${category}/README.md)`);
});

const mainReadme = `# LeetCode Practice

This is my LeetCode solution notes organized by "category" for quick reference and review.

## 📂 Category

${summaryRows.join("\n")}
`;

// 寫入最外層的 README
writeIfChanged(README_PATH, mainReadme);

console.log("\n🎉 README generation complete");
console.log(`📁 Categories processed: ${categories.length}`);
console.log(`🧮 Problems total: ${totalProblems}`);

// ----------------------------------
// 📌 工具函式區
// ----------------------------------

function getDifficulty(readmePath, folderName) {
  if (!fs.existsSync(readmePath)) {
    console.log(`  ⚠️  Skipped - README.md not found for ${folderName}`);
    return "Unknown";
  }

  const content = fs.readFileSync(readmePath, "utf-8");

  const match = content.match(/^##\s*difficulty\s*:?\s*\n+([^\n#]+)/im);
  if (match) {
    const level = match[1].trim().toLowerCase();
    return level.charAt(0).toUpperCase() + level.slice(1);
  }

  console.log(`  ⚠️  No difficulty found in ${folderName}/README.md`);
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

function writeIfChanged(filePath, newContent) {
  const current = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf-8")
    : "";

  if (current !== newContent) {
    fs.writeFileSync(filePath, newContent, "utf-8");
    console.log(`✅ Updated: ${filePath}`);
  } else {
    console.log(`⏩ Skipped (no changes): ${filePath}`);
  }
}
