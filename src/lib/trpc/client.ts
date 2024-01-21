import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "lib/trpc";

/**
 * trpc client used by React query in the browser and in next SSR.
 */
export const trpc = createTRPCReact<AppRouter>();
