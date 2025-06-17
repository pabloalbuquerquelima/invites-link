import {
  subscribeToEventRoute
} from "./chunk-OLJAQFB5.mjs";
import "./chunk-XEHHSVFS.mjs";
import {
  accessInviteLinkRoute
} from "./chunk-ZAQVFFKV.mjs";
import {
  getRankingRoute
} from "./chunk-DDELSQYU.mjs";
import {
  getSubscribersInviteClicksRoute
} from "./chunk-SUB77FPC.mjs";
import {
  getSubscribersInvitesCountRoute
} from "./chunk-QUDMQYGB.mjs";
import {
  getSubscribersInvitesRankingPositionRoute
} from "./chunk-YJAGGVB2.mjs";
import "./chunk-3E24TVVW.mjs";
import "./chunk-YMCQ4PYX.mjs";
import "./chunk-O5IZH2BZ.mjs";
import "./chunk-LK56JJT6.mjs";
import "./chunk-32PQA456.mjs";
import "./chunk-HZM24HWR.mjs";
import "./chunk-2K4AGWW3.mjs";
import "./chunk-CJHRX6QN.mjs";
import {
  env
} from "./chunk-SMCEJN4O.mjs";

// src/server.ts
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifyCors, {
  origin: true
});
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Connect",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscribersInviteClicksRoute);
app.register(getSubscribersInvitesCountRoute);
app.register(getSubscribersInvitesRankingPositionRoute);
app.register(getRankingRoute);
app.listen({
  port: env.PORT
}).then(() => {
  console.log("Server is running");
});
