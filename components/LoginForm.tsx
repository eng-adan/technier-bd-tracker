"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [email, setEmail] = useState("admin@technier.com")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    const res = await signIn("credentials", {
      email, password, redirect: false
    })
    setLoading(false)
    if (res?.error) setError("Invalid email or password")
    else router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="admin@technier.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="••••••••"
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg text-sm transition-colors"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
      <p className="text-center text-xs text-gray-400">
        Default: admin@technier.com / technier123
      </p>
    </form>
  )
}
