import {
  redis
} from "./chunk-CJHRX6QN.mjs";

// src/functions/get-subscriber-invites-count.ts
async function getSubscribersInviteCount({
  subscriberId
}) {
  const count = await redis.zscore("referral:ranking", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}

export {
  getSubscribersInviteCount
};
