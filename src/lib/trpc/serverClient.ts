import { headers } from "next/headers";
import { baseUrl, trpcUrl } from "utils/environment";
import { createCallerFactory } from "@trpc/server/dist/unstable-core-do-not-import/router";
import { AppRouter, appRouter } from "lib/trpc";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

const createCaller = createCallerFactory()<AppRouter>(appRouter);

/**
 * trpc client used only by a NextJs server hosted on the same server as the trpc server and procedures.
 * Mostly intended for use in React Server Components.
 */
export const trpcLocal = createCaller({
  req: new Request(baseUrl + trpcUrl, { headers: headers() }),
  resHeaders: new Headers(),
});

const externalApiUrl = process.env.EXTERNAL_API_URL;
const isLocalApi = externalApiUrl === undefined || externalApiUrl === null || externalApiUrl === "";

/**
 * trpc client for accessing remote API.
 * Mostly intended for use in React Server Components.
 */
export const trpcRemote = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: externalApiUrl + trpcUrl,
    }),
  ],
});

export const trpc = isLocalApi ? trpcLocal : trpcRemote;
