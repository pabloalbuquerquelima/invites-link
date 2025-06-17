// src/drizzle/schema/subscriptions.ts
import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";
var subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().notNull(),
  email: text("email").notNull().notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export {
  subscriptions
};
