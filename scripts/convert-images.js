const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imageDir = "./public/images/rap/fundamentals";

async function convertImages() {
  const files = fs.readdirSync(imageDir);

  for (const file of files) {
    if (!file.endsWith(".png")) continue;

    const input = path.join(imageDir, file);
    const output = path.join(imageDir, file.replace(".png", ".webp"));

    await sharp(input)
      .webp({
        lossless: true,
      })
      .toFile(output);

    console.log(`Converted: ${file}`);
  }
}

convertImages();
