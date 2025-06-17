import {
  accessInviteLink
} from "./chunk-3E24TVVW.mjs";
import {
  env
} from "./chunk-SMCEJN4O.mjs";

// src/routes/access-invite-link-route.ts
import { z } from "zod";
var accessInviteLinkRoute = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access invite link and subscribe to the event",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          302: z.object({
            302: z.null()
          })
        }
      }
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      console.log(subscriberId);
      await accessInviteLink({ subscriberId });
      const redirectUrl = new URL(env.WEB_URL);
      redirectUrl.searchParams.set("referrer", subscriberId);
      return reply.redirect(redirectUrl.toString(), 302).status(201);
    }
  );
};

export {
  accessInviteLinkRoute
};
