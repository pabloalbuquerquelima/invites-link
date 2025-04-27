import { redis } from '../redis/client'

interface accessInviteLinkProps {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: accessInviteLinkProps) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
