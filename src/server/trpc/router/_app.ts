import { router } from "../trpc";
import { authRouter } from "./auth";
import { tweetRouter } from "./tweet";

export const appRouter = router({
  tweet: tweetRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
