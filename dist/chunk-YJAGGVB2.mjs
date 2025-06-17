import {
  getSubscribersInviteRankingPosition
} from "./chunk-HZM24HWR.mjs";

// src/routes/get-subscribers-invites-ranking-position-route.ts
import { z } from "zod";
var getSubscribersInvitesRankingPositionRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/position",
    {
      schema: {
        summary: "Get subscribers invites count",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            position: z.number().nullable()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { position } = await getSubscribersInviteRankingPosition({ subscriberId });
      return { position };
    }
  );
};

export {
  getSubscribersInvitesRankingPositionRoute
};
