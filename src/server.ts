import { buildApp } from "./app.js";

// Temporary, minimal startup. Task 2 replaces this with centralized, Zod-validated
// configuration; until then we only read PORT/HOST with safe defaults.
const port = Number(process.env["PORT"] ?? 3000);
const host = process.env["HOST"] ?? "0.0.0.0";

const app = buildApp({ logger: true });

try {
  await app.listen({ port, host });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
