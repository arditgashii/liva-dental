import sharp from "sharp";
import { readFileSync } from "fs";

const iconSvg = readFileSync("public/brand/icon.svg");
const ogSvg = readFileSync("public/brand/og-source.svg");
const logoAlt = readFileSync("public/brand/logo-alt.svg");

await sharp(iconSvg).resize(512, 512).png().toFile("public/brand/icon-512.png");
await sharp(iconSvg).resize(180, 180).flatten({ background: "#12343B" }).png().toFile("public/apple-touch-icon.png");
await sharp(ogSvg).resize(1200, 630).jpeg({ quality: 88 }).toFile("public/brand/og-image.jpg");
await sharp(logoAlt, { density: 288 }).png().toFile("public/brand/logo@2x.png");

console.log("brand raster assets generated");
