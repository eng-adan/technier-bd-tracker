"use client"
import { useState, useCallback } from "react"
import { signOut } from "next-auth/react"
import { PLAN_DATA, Phase, DayPlan } from "@/lib/planData"

const TAG_COLORS: Record<string, string> = {
  LinkedIn: "bg-blue-50 text-blue-700",
  Upwork: "bg-green-50 text-green-700",
  Copy: "bg-purple-50 text-purple-700",
  Profile: "bg-indigo-50 text-indigo-700",
  Directory: "bg-orange-50 text-orange-700",
  Google: "bg-yellow-50 text-yellow-700",
  Strategy: "bg-violet-50 text-violet-700",
  CRM: "bg-sky-50 text-sky-700",
  Tool: "bg-teal-50 text-teal-700",
  Research: "bg-cyan-50 text-cyan-700",
  Reddit: "bg-red-50 text-red-700",
  Social: "bg-pink-50 text-pink-700",
  Email: "bg-blue-50 text-blue-700",
  "Follow-up": "bg-amber-50 text-amber-700",
  Sales: "bg-emerald-50 text-emerald-700",
  Referral: "bg-rose-50 text-rose-700",
  Content: "bg-lime-50 text-lime-700",
  Review: "bg-orange-50 text-orange-700",
  Test: "bg-fuchsia-50 text-fuchsia-700",
  Client: "bg-green-50 text-green-700",
  Reviews: "bg-yellow-50 text-yellow-700",
  Outreach: "bg-blue-50 text-blue-700",
  Community: "bg-teal-50 text-teal-700",
  Partners: "bg-indigo-50 text-indigo-700",
  Process: "bg-gray-100 text-gray-600",
  Pricing: "bg-emerald-50 text-emerald-700",
  Upgrade: "bg-violet-50 text-violet-700",
  Win: "bg-green-100 text-green-800",
}

const PHASE_COLORS = [
  { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", dot: "bg-emerald-500" },
  { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-800", dot: "bg-blue-500" },
  { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-800", dot: "bg-purple-500" },
]

function DayCard({ day, completedIds, onToggle, phaseIdx }: {
  day: DayPlan
  completedIds: Set<string>
  onToggle: (taskId: string) => void
  phaseIdx: number
}) {
  const [open, setOpen] = useState(false)
  const done = day.tasks.filter(t => completedIds.has(t.id)).length
  const total = day.tasks.length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0
  const colors = PHASE_COLORS[phaseIdx]

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.badge}`}>{day.day}</span>
            <span className="text-sm font-medium text-gray-900 truncate">{day.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{done}/{total}</span>
          </div>
        </div>
        <span className="text-gray-400 text-xs ml-2">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="border-t border-gray-100 divide-y divide-gray-50">
          {day.tasks.map(task => (
            <label
              key={task.id}
              className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={completedIds.has(task.id)}
                onChange={() => onToggle(task.id)}
                className="mt-0.5 w-4 h-4 rounded accent-emerald-500 cursor-pointer flex-shrink-0"
              />
              <span className={`text-sm flex-1 leading-relaxed ${completedIds.has(task.id) ? "line-through text-gray-400" : "text-gray-700"}`}>
                {task.text}
              </span>
              <span className={`text-xs px-1.5 py-0.5 rounded-md flex-shrink-0 font-medium ${TAG_COLORS[task.tag] || "bg-gray-100 text-gray-600"}`}>
                {task.tag}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

function PhaseSection({ phase, completedIds, onToggle, idx }: {
  phase: Phase
  completedIds: Set<string>
  onToggle: (taskId: string) => void
  idx: number
}) {
  const [open, setOpen] = useState(idx === 0)
  const colors = PHASE_COLORS[idx]
  const total = phase.days.flatMap(d => d.tasks).length
  const done = phase.days.flatMap(d => d.tasks).filter(t => completedIds.has(t.id)).length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <div className={`rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left"
      >
        <div className={`w-2.5 h-2.5 rounded-full ${colors.dot} flex-shrink-0`} />
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-gray-900 text-sm">{phase.label}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge}`}>{phase.weekRange}</span>
            <span className="text-xs text-gray-500 ml-auto">{done}/{total} tasks · {pct}%</span>
          </div>
        </div>
        <span className="text-gray-400 text-sm">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-2">
          {phase.days.map(day => (
            <DayCard
              key={day.id}
              day={day}
              completedIds={completedIds}
              onToggle={onToggle}
              phaseIdx={idx}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function DashboardClient({
  initialCompleted,
  totalTasks,
  userName,
}: {
  initialCompleted: string[]
  totalTasks: number
  userName: string
}) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set(initialCompleted))
  const [saving, setSaving] = useState(false)
  const [tab, setTab] = useState<"plan" | "stats">("plan")

  const handleToggle = useCallback(async (taskId: string) => {
    // Optimistic update
    setCompletedIds(prev => {
      const next = new Set(prev)
      if (next.has(taskId)) next.delete(taskId)
      else next.add(taskId)
      return next
    })

    setSaving(true)
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "toggle", taskId }),
      })
      const data = await res.json()
      if (data.completedIds) setCompletedIds(new Set(data.completedIds))
    } catch {
      console.error("Failed to save progress")
    } finally {
      setSaving(false)
    }
  }, [])

  const handleReset = async () => {
    if (!confirm("Reset all progress? This cannot be undone.")) return
    setCompletedIds(new Set())
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "reset" }),
    })
  }

  const done = completedIds.size
  const pct = totalTasks > 0 ? Math.round((done / totalTasks) * 100) : 0

  // Phase stats
  const phaseStats = PLAN_DATA.map(phase => {
    const phaseTasks = phase.days.flatMap(d => d.tasks)
    const phaseDone = phaseTasks.filter(t => completedIds.has(t.id)).length
    return { label: phase.label, done: phaseDone, total: phaseTasks.length, weekRange: phase.weekRange }
  })

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <div>
            <h1 className="font-semibold text-gray-900 text-sm leading-tight">Technier BD Tracker</h1>
            <p className="text-xs text-gray-400">Hi, {userName}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {saving && <span className="text-xs text-gray-400 animate-pulse">Saving...</span>}
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1.5 border border-gray-200 rounded-lg"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Progress overview */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-xs text-gray-500 mb-1">Overall progress</p>
            <p className="text-3xl font-semibold text-gray-900">{pct}%</p>
          </div>
          <p className="text-sm text-gray-500">{done} / {totalTasks} tasks</p>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="grid grid-cols-4 gap-3 mt-4">
          {phaseStats.map((ps, i) => {
            const colors = PHASE_COLORS[i]
            const pp = ps.total > 0 ? Math.round((ps.done / ps.total) * 100) : 0
            return (
              <div key={i} className={`${colors.bg} rounded-xl p-3 border ${colors.border}`}>
                <p className={`text-xs font-medium px-1.5 py-0.5 rounded-full inline-block mb-2 ${colors.badge}`}>{ps.weekRange}</p>
                <p className="text-lg font-semibold text-gray-900">{pp}%</p>
                <p className="text-xs text-gray-500">{ps.done}/{ps.total}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {(["plan", "stats"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${tab === t ? "bg-white border border-gray-200 text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
          >
            {t === "plan" ? "Daily Plan" : "Phase Stats"}
          </button>
        ))}
      </div>

      {/* Plan */}
      {tab === "plan" && (
        <div className="space-y-3">
          {PLAN_DATA.map((phase, idx) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              completedIds={completedIds}
              onToggle={handleToggle}
              idx={idx}
            />
          ))}
          <div className="pt-4 text-center">
            <button
              onClick={handleReset}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors"
            >
              Reset all progress
            </button>
          </div>
        </div>
      )}

      {/* Stats */}
      {tab === "stats" && (
        <div className="space-y-4">
          {PLAN_DATA.map((phase, pi) => {
            const colors = PHASE_COLORS[pi]
            return (
              <div key={phase.id} className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <h3 className="font-semibold text-gray-900 text-sm">{phase.label}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${colors.badge} ml-auto`}>{phase.weekRange}</span>
                </div>
                <div className="space-y-3">
                  {phase.days.map(day => {
                    const dayDone = day.tasks.filter(t => completedIds.has(t.id)).length
                    const dayPct = day.tasks.length > 0 ? Math.round((dayDone / day.tasks.length) * 100) : 0
                    return (
                      <div key={day.id}>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>{day.day} — {day.title}</span>
                          <span>{dayDone}/{day.tasks.length}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all"
                            style={{ width: `${dayPct}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
