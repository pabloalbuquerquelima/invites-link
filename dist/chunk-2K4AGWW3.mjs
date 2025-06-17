import {
  redis
} from "./chunk-CJHRX6QN.mjs";

// src/functions/get-subscribers-invite-clicks.ts
async function getSubscribersInviteClicks({
  subscriberId
}) {
  const count = await redis.hget("referral:access-count", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}

export {
  getSubscribersInviteClicks
};
