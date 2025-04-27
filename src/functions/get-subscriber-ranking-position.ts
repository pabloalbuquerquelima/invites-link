import { redis } from '../redis/client'

interface getSubscribersInviteRankingPositionProps {
  subscriberId: string
}

export async function getSubscribersInviteRankingPosition({
  subscriberId,
}: getSubscribersInviteRankingPositionProps) {
  //Ver a posição no rankings
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (rank === null) {
    return {
      position: null,
    }
  }

  return { position: rank + 1 }
}
