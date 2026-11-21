// feel-awe entry — V5 Stone (river stone). Gated by Sistem Juri 02:50 WIB;
// submit only on gate pass + Akbar's explicit approval. Deterministic, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `Water runs over the stone.
It runs over it, slow,
and the stone grows rounder.
The river keeps running,
over the stone, over the stone.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
