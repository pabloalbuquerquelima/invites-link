import { redis } from '../redis/client'

interface getSubscribersInviteClicksProps {
  subscriberId: string
}

export async function getSubscribersInviteClicks({
  subscriberId,
}: getSubscribersInviteClicksProps) {
  //Pegar a contagem de inscrições
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
