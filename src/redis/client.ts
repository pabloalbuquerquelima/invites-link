import { Redis } from 'ioredis'
import { env } from '../env'

//Conexão com Redis 
export const redis = new Redis(env.REDIS_URL)