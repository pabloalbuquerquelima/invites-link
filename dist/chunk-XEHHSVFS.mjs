import {
  db
} from "./chunk-O5IZH2BZ.mjs";
import {
  subscriptions
} from "./chunk-LK56JJT6.mjs";
import {
  redis
} from "./chunk-CJHRX6QN.mjs";

// src/functions/subscribe-to-event.ts
import { eq } from "drizzle-orm";
async function subscribeToEvent({
  name,
  email,
  referrerId
}) {
  const subscribers = await db.select().from(subscriptions).where(eq(subscriptions.email, email));
  if (subscribers.length > 0) {
    return {
      subscriberId: subscribers[0].id
    };
  }
  const result = await db.insert(subscriptions).values({ name, email }).returning();
  if (referrerId) {
    await redis.zincrby("referral:ranking", 1, referrerId);
  }
  const subscriber = result[0];
  return {
    subscriberId: subscriber.id
  };
}

export {
  subscribeToEvent
};
