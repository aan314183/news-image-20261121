// News image for Saturday 21 November 2026 (Node 22, standard library only).
// The entry is the front page in entry.png beside this file; the program
// copies it to /output/entry.png after checking it is a whole PNG inside
// the competition limits (at most 1024 by 1024 pixels, at most 1 MiB).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngMagic)) {
  throw new Error('entry.png is not a PNG file');
}
if (!bytes.subarray(12, 16).equals(Buffer.from('IHDR'))) {
  throw new Error('entry.png has no IHDR chunk where one belongs');
}
// A whole PNG ends in an empty IEND chunk: 4 zero length bytes, "IEND",
// then its 4-byte CRC. Without it the gate sees a truncated file.
const tail = bytes.subarray(bytes.length - 12);
if (!tail.subarray(0, 4).equals(Buffer.from([0, 0, 0, 0]))) {
  throw new Error('entry.png does not end in an empty IEND chunk');
}
if (!tail.subarray(4, 8).equals(Buffer.from('IEND'))) {
  throw new Error('entry.png does not end in an IEND chunk');
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`wrote ${width}x${height} PNG (${bytes.length} bytes) to ${join(outDir, 'entry.png')}`);
