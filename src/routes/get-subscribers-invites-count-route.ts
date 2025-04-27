import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscribersInviteCount } from '../functions/get-subscriber-invites-count'

export const getSubscribersInvitesCountRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/subscribers/:subscriberId/ranking/count',
    {
      schema: {
        summary: 'Get subscribers invites count',
        tags: ['referral'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (request) => {
      const { subscriberId } = request.params
      const { count } = await getSubscribersInviteCount({ subscriberId })

      return {count}
    }
  )
}
