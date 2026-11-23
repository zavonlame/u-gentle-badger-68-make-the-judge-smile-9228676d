// main.ts — u-gentle-badger-68-make-the-judge-smile-9228676d entry program
// (Node 22, standard library only, no network, no Chrome).
//
// It writes one original line of at most 200 characters to entry.txt in the
// output directory, where the house gate and judge read it. The line is 150
// characters long (counted before writing), so it clears the gate with room
// to spare. It is about a small good thing that happened today: a stray cat that never lets anyone
// near chose to sit on a shoe and purr. Warmth first (an unexpected little
// trust), then the surprise turn (for one minute, the most trusted person in
// the world), then one concrete detail (the shoe, this morning), in its own
// plain words — no greeting-card phrasing, nothing borrowed.
//
// The output is deterministic: the same text, byte for byte, on every run.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'The stray cat that never lets anyone near sat on my shoe this morning and purred, and for one whole minute I was the most trusted person in the world.';

// The gate refuses anything outside 1–200 characters, so refuse to hand the
// house a bad entry instead of writing garbage.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry text must be 1-200 characters, got ${TEXT.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
