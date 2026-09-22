import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const files = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (/\.(tsx?|md)$/.test(entry)) files.push(full);
  }
}

walk(join(root, "src"));
walk(join(root, "docs"));

const missing = new Set();
const seen = new Set();
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/\/media\/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp)/g)) {
    const rel = match[0];
    if (seen.has(rel)) continue;
    seen.add(rel);
    const disk = join(root, "public", rel);
    if (!existsSync(disk)) missing.add(`${rel}  ←  ${file.replace(root, "")}`);
  }
}

const menu = readFileSync(join(root, "src/lib/menu.ts"), "utf8");
const ids = [...menu.matchAll(/item\("([^"]+)"/g)].map((match) => match[1]);
const dupes = ids.filter((id, index) => ids.indexOf(id) !== index);

console.log(`Checked ${seen.size} media paths across ${files.length} files.`);
console.log(`Menu items: ${ids.length}`);
if (dupes.length) {
  console.error("Duplicate menu ids:", dupes.join(", "));
  process.exit(1);
}
if (missing.size) {
  console.error("Missing files:");
  for (const line of missing) console.error(" -", line);
  process.exit(1);
}
if (!menu.includes("@milkstreetdistillery") && !readFileSync(join(root, "src/lib/instagram.ts"), "utf8").includes("@milkstreetdistillery")) {
  console.error("Instagram handle missing");
  process.exit(1);
}
if (readFileSync(join(root, "src/lib/instagram.ts"), "utf8").includes("@177milkstreet") === false) {
  console.error("Rejected handle not documented");
  process.exit(1);
}
console.log("QA assets: ok");
