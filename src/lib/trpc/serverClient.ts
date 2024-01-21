import { headers } from "next/headers";
import { baseUrl, trpcUrl } from "utils/environment";
import { createCallerFactory } from "lib/trpc/server";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { type AppRouter, appRouter } from "lib/trpc/router";

const createCaller = createCallerFactory(appRouter);

/**
 * trpc client used only by a NextJs server hosted on the same server as the trpc server and procedures.
 * Mostly intended for use in React Server Components.
 */
export const trpc = createCaller({
  req: new Request(baseUrl + trpcUrl, { headers: headers() }),
  resHeaders: new Headers(),
});

/**
 * trpc client for accessing remote API.
 * Mostly intended for use in React Server Components.
 */
export const trpcRemote = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      // TODO replace with external URL.
      url: baseUrl + trpcUrl,
    }),
  ],
});
