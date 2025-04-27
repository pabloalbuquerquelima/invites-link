import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'
import { accessInviteLinkRoute } from './routes/access-invite-link-route'
import { getSubscribersInviteClicksRoute } from './routes/get-subscribers-invite-click-route'
import { getSubscribersInvitesCountRoute } from './routes/get-subscribers-invites-count-route'
import { getSubscribersInvitesRankingPositionRoute } from './routes/get-subscribers-invites-ranking-position-route'
import { getRankingRoute } from './routes/get-ranking-route'

const app = fastify().withTypeProvider<ZodTypeProvider>()
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: true,
})

// Swaggwer ///////////////////////////////
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Connect',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})
//////////////////////////////////////////////////////
app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscribersInviteClicksRoute)
app.register(getSubscribersInvitesCountRoute)
app.register(getSubscribersInvitesRankingPositionRoute)
app.register(getRankingRoute)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server is running')
  })
