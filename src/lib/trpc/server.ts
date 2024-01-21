import { initTRPC } from "@trpc/server";
import { type Context } from "lib/trpc/context";

// replace with `const trpc = initTRPC.context<Context>().create();` if we want context.
const trpc = initTRPC.context<Context>().create();

// Base router and procedure helpers
export const router = trpc.router;
export const procedure = trpc.procedure;
export const createCallerFactory = trpc.createCallerFactory;
