// feel-awe entry — K4v2 Stasiun malam (best measured: gate vs #20 0.55, 2/4).
// Submitted on Akbar's approval 02:54 WIB. Deterministic, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `You lean on your father's shoulder.
Clack. A far clack. The last train goes by.
The rails cool in the dark, one by one,
and the earth turns toward morning.
The station was a field once,
before that, the sea.
The night thins, and thins, into morning.
Morning comes underfoot.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
