import { Redis } from "@upstash/redis"

let redis: Redis | null = null

function getRedis(): Redis | null {
  if (redis) return redis
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
    return redis
  }
  return null
}

// In-memory fallback when Redis is not configured (dev mode)
const memStore: Record<string, string[]> = {}

export async function getProgress(userId: string): Promise<string[]> {
  const r = getRedis()
  if (r) {
    const data = await r.get<string[]>(`progress:${userId}`)
    return data || []
  }
  return memStore[userId] || []
}

export async function saveProgress(userId: string, completedIds: string[]): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(`progress:${userId}`, JSON.stringify(completedIds))
    return
  }
  memStore[userId] = completedIds
}

export async function toggleTask(userId: string, taskId: string): Promise<string[]> {
  const current = await getProgress(userId)
  let updated: string[]
  if (current.includes(taskId)) {
    updated = current.filter(id => id !== taskId)
  } else {
    updated = [...current, taskId]
  }
  await saveProgress(userId, updated)
  return updated
}
