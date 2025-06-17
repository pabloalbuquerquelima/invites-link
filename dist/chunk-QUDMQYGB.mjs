import {
  getSubscribersInviteCount
} from "./chunk-32PQA456.mjs";

// src/routes/get-subscribers-invites-count-route.ts
import { z } from "zod";
var getSubscribersInvitesCountRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscribers invites count",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            count: z.number()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscribersInviteCount({ subscriberId });
      return { count };
    }
  );
};

export {
  getSubscribersInvitesCountRoute
};
