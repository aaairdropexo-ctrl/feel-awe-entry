// feel-awe entry — V4-A draft (rain on the roof). The final text is swapped in
// after the dual gate picks a winner. Deterministic, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `You lie under the blanket at night.
Your grandmother hums, low and slow.
Rain. A soft rain on the roof.
The drops fall, and fall, and fall.
The roof was a tree once,
before that, a seed.
The earth drinks, slow.
The rain falls on the roof,
and on the field, and on the sea.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
