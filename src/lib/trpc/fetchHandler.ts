import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "lib/trpc/context";
import { appRouter } from "lib/trpc/router";
import { trpcUrl } from "utils/environment";

export function fetchHandler(request: Request) {
  return fetchRequestHandler({
    endpoint: trpcUrl,
    req: request,
    router: appRouter,
    createContext,
  });
}
