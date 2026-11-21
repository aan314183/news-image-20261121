// news-image-20261121 — copies entry.png to the output directory.
// Node 22 stdlib only. No network. Deterministic: byte-identical output.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, "entry.png");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const DEST = join(OUT_DIR, "entry.png");

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const buf = readFileSync(SRC);
if (!buf.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG (bad magic)");
}
if (buf.length > 1048576) {
  throw new Error(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
// PNG integrity: IHDR chunk must start at byte 12, file must end with an
// empty IEND chunk (12 trailing bytes: length 0, "IEND", CRC).
if (buf.subarray(12, 16).toString("latin1") !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk at offset 12");
}
const tail = buf.subarray(buf.length - 12);
if (tail.readUInt32BE(0) !== 0 || tail.subarray(4, 8).toString("latin1") !== "IEND") {
  throw new Error("entry.png does not end with an empty IEND chunk");
}

mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SRC, DEST);
console.log(`copied entry.png (${buf.length} bytes, ${width}x${height}) -> ${DEST}`);
