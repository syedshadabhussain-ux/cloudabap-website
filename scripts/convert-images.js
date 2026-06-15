const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imageDir = "./public/images/rap/cds-fundamentals";

async function convertSingleFile(filePath) {
  const output = filePath.replace(".png", ".webp");

  await sharp(filePath).webp({ lossless: true }).toFile(output);

  console.log(`Converted: ${path.basename(filePath)}`);
}

async function convertFolder() {
  const files = fs.readdirSync(imageDir);

  for (const file of files) {
    if (!file.toLowerCase().endsWith(".png")) continue;

    const input = path.join(imageDir, file);
    const output = path.join(imageDir, file.replace(/\.png$/i, ".webp"));

    await sharp(input).webp({ lossless: true }).toFile(output);

    console.log(`Converted: ${file}`);
  }
}

async function main() {
  const filePath = process.argv[2];

  if (filePath) {
    await convertSingleFile(filePath);
  } else {
    await convertFolder();
  }
}

main().catch(console.error);
