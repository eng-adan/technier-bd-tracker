import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getProgress, toggleTask, saveProgress } from "@/lib/redis"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const progress = await getProgress(session.user.email)
  return NextResponse.json({ completedIds: progress })
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const body = await req.json()

  // Toggle a single task
  if (body.action === "toggle" && body.taskId) {
    const updated = await toggleTask(session.user.email, body.taskId)
    return NextResponse.json({ completedIds: updated })
  }

  // Reset all progress
  if (body.action === "reset") {
    await saveProgress(session.user.email, [])
    return NextResponse.json({ completedIds: [] })
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 })
}
