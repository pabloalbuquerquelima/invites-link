import {
  subscriptions
} from "./chunk-LK56JJT6.mjs";
import {
  env
} from "./chunk-SMCEJN4O.mjs";

// src/drizzle/client.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
var pg = postgres(env.POSTGRES_URL);
var db = drizzle(pg, {
  schema: {
    subscriptions
  }
});

export {
  pg,
  db
};
