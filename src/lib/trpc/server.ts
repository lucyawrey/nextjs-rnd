import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "lib/trpc";
import { initTRPC } from "@trpc/server";
import { trpcUrl } from "utils/environment";
import { type Context, createContext } from "lib/trpc/context";

const trpc = initTRPC.context<Context>().create();

// Base router and procedure helpers
export const router = trpc.router;
export const procedure = trpc.procedure;
export const createCallerFactory = trpc.createCallerFactory;

export function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: trpcUrl,
    req: request,
    router: appRouter,
    createContext,
  });
}
