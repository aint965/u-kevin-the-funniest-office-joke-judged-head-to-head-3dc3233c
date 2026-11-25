import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the birthday card that circulates the whole office
// for signatures. Setup first, double turn at the end, punchline last.
const JOKE =
  "The office birthday card finally reached my desk — it was mine, and I'd already signed it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE + "\n", "utf8");
