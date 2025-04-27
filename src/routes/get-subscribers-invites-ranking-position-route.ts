import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscribersInviteRankingPosition } from '../functions/get-subscriber-ranking-position'

export const getSubscribersInvitesRankingPositionRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/position',
      {
        schema: {
          summary: 'Get subscribers invites count',
          tags: ['referral'],
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async request => {
        const { subscriberId } = request.params
        const { position } = await getSubscribersInviteRankingPosition({ subscriberId })

        return { position }
      }
    )
  }
