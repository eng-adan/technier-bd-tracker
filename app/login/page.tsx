import LoginForm from "@/components/LoginForm"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function LoginPage() {
  const session = await getServerSession(authOptions)
  if (session) redirect("/dashboard")

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">T</span>
            </div>
            <span className="font-semibold text-gray-900">Technier BD Tracker</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to track your 90-day lead gen plan</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
