import { inArray, name } from 'drizzle-orm';
import { redis } from '../redis/client';
import { subscriptions } from '../drizzle/schema/subscriptions';
import { db } from './../drizzle/client';

export async function getRanking() {
  const ranking = await redis.zrevrange('referral:ranking', 0, 2, 'WITHSCORES')
  console.log(ranking)

  //// Mapear o id com o score
  const subscriberIdScore: Record<string, number> = {}

  for (let i = 0; i < ranking.length; i += 2) {
    subscriberIdScore[ranking[i]] = Number.parseInt(ranking[i + 1])

  console.log(subscriberIdScore)
  }////////////////////////////

  //// Pegar os dados do subscriber (Nome)
  const subscriber = await db
    .select()
    .from(subscriptions)
    .where(inArray(subscriptions.id, Object.keys(subscriberIdScore)))

/// Construir o objeto com o ranking
  const rankingWithScore = subscriber.map((subscriber) => {
    return {
      Id: subscriber.id,
      name: subscriber.name,
      score: subscriberIdScore[subscriber.id],
    }
  }).sort((a, b) => b.score - a.score)
///////////////////////////////////////

  console.log(rankingWithScore)
  return { rankingWithScore }
}
