import {
  getRanking
} from "./chunk-YMCQ4PYX.mjs";

// src/routes/get-ranking-route.ts
import { z } from "zod";
var getRankingRoute = async (app) => {
  app.get(
    "/ranking",
    {
      schema: {
        summary: "ranking",
        tags: ["referral"],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                Id: z.string(),
                name: z.string(),
                score: z.number()
              })
            )
          })
        }
      }
    },
    async () => {
      const { rankingWithScore } = await getRanking();
      return { ranking: rankingWithScore };
    }
  );
};

export {
  getRankingRoute
};
