import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscribersInviteClicks } from '../functions/get-subscribers-invite-clicks'

export const getSubscribersInviteClicksRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/subscribers/:subscriberId/ranking/clicks',
    {
      schema: {
        summary: 'Get subscribers invite clicks count',
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
      const { count } = await getSubscribersInviteClicks({ subscriberId })

      return {count}
    }
  )
}
