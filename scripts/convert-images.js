const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const force = process.argv.includes("--force");

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (![".png", ".jpg", ".jpeg"].includes(ext)) {
    return;
  }

  const output = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  if (!force && fs.existsSync(output)) {
    console.log(`⏩ Skipped (already exists): ${path.basename(output)}`);
    return;
  }

  await sharp(filePath)
    .webp({
      lossless: true,
    })
    .toFile(output);

  console.log(`✔ Converted: ${path.basename(filePath)}`);
}

async function convertDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertDirectory(fullPath);
    } else {
      await convertFile(fullPath);
    }
  }
}

async function main() {
  // Default location if nothing is passed
  const target = process.argv[2] || "./public/images";

  const fullPath = path.resolve(target);

  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Path not found: ${fullPath}`);
    process.exit(1);
  }

  const stat = fs.statSync(fullPath);

  if (stat.isDirectory()) {
    console.log(`📂 Converting images in folder: ${target}\n`);
    await convertDirectory(fullPath);
  } else {
    console.log(`🖼️ Converting file: ${target}\n`);
    await convertFile(fullPath);
  }

  console.log("\n🎉 Conversion Complete!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
