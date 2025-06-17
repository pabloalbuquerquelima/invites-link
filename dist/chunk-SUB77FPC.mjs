import {
  getSubscribersInviteClicks
} from "./chunk-2K4AGWW3.mjs";

// src/routes/get-subscribers-invite-click-route.ts
import { z } from "zod";
var getSubscribersInviteClicksRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscribers invite clicks count",
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
      const { count } = await getSubscribersInviteClicks({ subscriberId });
      return { count };
    }
  );
};

export {
  getSubscribersInviteClicksRoute
};
