import Fastify, { type FastifyInstance, type FastifyServerOptions } from "fastify";
import { healthRoutes } from "./http/routes/health.js";

export const API_PREFIX = "/api/v1";

export interface BuildAppOptions {
  /** Passed straight to Fastify. Tests keep the default (logging disabled). */
  logger?: FastifyServerOptions["logger"];
}

/**
 * App factory. Builds a fully configured Fastify instance WITHOUT starting a
 * listener, so tests can use `app.inject()` and a serverless entry point can
 * reuse the same instance later. Dependencies will be injected here as
 * parameters in later tasks (no global singletons).
 */
export function buildApp(options: BuildAppOptions = {}): FastifyInstance {
  const app = Fastify({
    logger: options.logger ?? false,
  });

  void app.register(healthRoutes, { prefix: API_PREFIX });

  return app;
}
