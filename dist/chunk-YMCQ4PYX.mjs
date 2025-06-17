import {
  db
} from "./chunk-O5IZH2BZ.mjs";
import {
  subscriptions
} from "./chunk-LK56JJT6.mjs";
import {
  redis
} from "./chunk-CJHRX6QN.mjs";

// src/functions/get-ranking.ts
import { inArray } from "drizzle-orm";
async function getRanking() {
  const ranking = await redis.zrevrange("referral:ranking", 0, 2, "WITHSCORES");
  console.log(ranking);
  const subscriberIdScore = {};
  for (let i = 0; i < ranking.length; i += 2) {
    subscriberIdScore[ranking[i]] = Number.parseInt(ranking[i + 1]);
  }
  const subscriber = await db.select().from(subscriptions).where(inArray(subscriptions.id, Object.keys(subscriberIdScore)));
  const rankingWithScore = subscriber.map((subscriber2) => {
    return {
      Id: subscriber2.id,
      name: subscriber2.name,
      score: subscriberIdScore[subscriber2.id]
    };
  }).sort((a, b) => b.score - a.score);
  console.log(rankingWithScore);
  return { rankingWithScore };
}

export {
  getRanking
};
