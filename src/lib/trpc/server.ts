// WIP see: https://github.com/jherr/trpc-on-the-app-router and
//          https://trpc.io/docs/client/nextjs

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "lib/trpc";
import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create();
// Base router and procedure helpers
export const router = trpc.router;
export const procedure = trpc.procedure;
export const createCallerFactory = trpc.createCallerFactory;

export function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: () => ({ request }),
  });
}
