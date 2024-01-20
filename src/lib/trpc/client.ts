import { createCallerFactory } from "@trpc/server/dist/unstable-core-do-not-import/router";
import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter, appRouter } from "lib/trpc";

const createCaller = createCallerFactory()<AppRouter>(appRouter);

export function getServerTrpc(request: Request) {
  return createCaller({ req: request, resHeaders: new Headers() });
}

// Pass AppRouter as generic here. This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCReact<AppRouter>();
