import { redis } from '../redis/client'

interface getSubscribersInviteCountProps {
  subscriberId: string
}

export async function getSubscribersInviteCount({
  subscriberId,
}: getSubscribersInviteCountProps) {
  //Pegar a contagem de inscrições
  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
