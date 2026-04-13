import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { getProgress } from "@/lib/redis"
import { getTotalTaskCount } from "@/lib/planData"
import DashboardClient from "@/components/DashboardClient"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) redirect("/login")

  const completedIds = await getProgress(session.user.email)
  const totalTasks = getTotalTaskCount()

  return (
    <DashboardClient
      initialCompleted={completedIds}
      totalTasks={totalTasks}
      userName={session.user.name || session.user.email}
    />
  )
}
