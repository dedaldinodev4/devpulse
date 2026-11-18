import type { FastifyPluginAsync } from "fastify";

/**
 * Liveness probe.
 *
 * Answers only "is this process able to serve HTTP?". It must NOT touch the
 * database or any external service: a liveness check that depends on a
 * dependency turns a dependency outage into a restart loop. A separate
 * readiness check will be added once Prisma/PostgreSQL exist (Task 3).
 */
export const healthRoutes: FastifyPluginAsync = (app) => {
  app.get("/health", () => ({ status: "ok" as const }));
  return Promise.resolve();
};
