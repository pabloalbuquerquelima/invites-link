import {
  redis
} from "./chunk-CJHRX6QN.mjs";

// src/functions/get-subscriber-ranking-position.ts
async function getSubscribersInviteRankingPosition({
  subscriberId
}) {
  const rank = await redis.zrevrank("referral:ranking", subscriberId);
  if (rank === null) {
    return {
      position: null
    };
  }
  return { position: rank + 1 };
}

export {
  getSubscribersInviteRankingPosition
};
