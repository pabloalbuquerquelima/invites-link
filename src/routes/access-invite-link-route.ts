import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { env } from '../env'
import { accessInviteLink } from '../functions/access-invite-link'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Access invite link and subscribe to the event',
        tags: ['referral'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          302: z.object({
            302: z.null(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params
      console.log(subscriberId)
      
      await accessInviteLink({ subscriberId })
      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referrer', subscriberId)


      return reply.redirect(redirectUrl.toString(), 302).status(201)
    }
  )
}
