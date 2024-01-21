import { z } from "zod";
import { procedure, router } from "lib/trpc/server";

export const appRouter = router({
  messages: router({
    hello: procedure
      .input(
        z.object({
          text: z.string(),
        })
      )
      .query((opts) => {
        return {
          greeting: `hello ${opts.input.text}`,
        };
      }),
    goodbye: procedure
      .input(
        z.object({
          text: z.string(),
        })
      )
      .query((opts) => {
        return {
          greeting: `goodbye ${opts.input.text}`,
        };
      }),
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
