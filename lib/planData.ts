export interface Task {
  id: string
  text: string
  tag: string
}

export interface DayPlan {
  id: string
  day: string
  title: string
  tasks: Task[]
}

export interface Phase {
  id: string
  label: string
  weekRange: string
  days: DayPlan[]
}

export const PLAN_DATA: Phase[] = [
  {
    id: "phase1",
    label: "Phase 1 — Foundation",
    weekRange: "Week 1–2",
    days: [
      {
        id: "d1_1", day: "Day 1", title: "Company Identity & Profiles",
        tasks: [
          { id: "t1", text: "Create/optimize LinkedIn personal profile — headline, about, banner", tag: "LinkedIn" },
          { id: "t2", text: "Set up Aspire Enterprise LLC company page on LinkedIn", tag: "LinkedIn" },
          { id: "t3", text: "Set up Technier Solutions company page on LinkedIn", tag: "LinkedIn" },
          { id: "t4", text: "Write LinkedIn headline focusing on client pain, not your title", tag: "Copy" },
          { id: "t5", text: "Write a strong About section (speak to problems you solve, not resume)", tag: "Copy" },
          { id: "t6", text: "Add 2 portfolio/project samples or descriptions to profile", tag: "Profile" },
        ]
      },
      {
        id: "d1_2", day: "Day 2", title: "Brand Listings Setup",
        tasks: [
          { id: "t7", text: "Create a free company listing on Clutch.co (use Aspire Enterprise for credibility)", tag: "Directory" },
          { id: "t8", text: "Create a free listing on GoodFirms.co", tag: "Directory" },
          { id: "t9", text: "Create a free listing on DesignRush.com", tag: "Directory" },
          { id: "t10", text: "Register on Google Business Profile (Aspire Enterprise LLC)", tag: "Google" },
          { id: "t11", text: "Register a free profile on Bark.com", tag: "Directory" },
        ]
      },
      {
        id: "d1_3", day: "Day 3", title: "Upwork Agency Profile",
        tasks: [
          { id: "t12", text: "Create Upwork Agency profile under Aspire Enterprise LLC", tag: "Upwork" },
          { id: "t13", text: "Write agency overview — problem-first, outcome-focused", tag: "Copy" },
          { id: "t14", text: "Add service categories (dev, AI, cloud, QA)", tag: "Upwork" },
          { id: "t15", text: "Add team members and skills to the agency profile", tag: "Upwork" },
          { id: "t16", text: "Set hourly rate ($30–50/hr to start for credibility vs competition)", tag: "Pricing" },
        ]
      },
      {
        id: "d1_4", day: "Day 4", title: "ICP & Niche Definition",
        tasks: [
          { id: "t17", text: "Define Ideal Client Profile — industry, company size, geography, tech stack", tag: "Strategy" },
          { id: "t18", text: "Pick ONE niche to start (e.g. US-based SaaS startups, e-commerce SMBs)", tag: "Strategy" },
          { id: "t19", text: "Write one-sentence positioning statement for Aspire Enterprise", tag: "Copy" },
          { id: "t20", text: "Create Google Sheet for prospect tracking (CRM starter)", tag: "CRM" },
          { id: "t21", text: "Sign up for HubSpot free CRM and set up pipeline stages", tag: "CRM" },
        ]
      },
      {
        id: "d1_5", day: "Day 5", title: "Free Tool Stack Setup",
        tasks: [
          { id: "t22", text: "Sign up for Apollo.io free tier (50 email credits/month)", tag: "Tool" },
          { id: "t23", text: "Sign up for Hunter.io free tier (25 searches/month)", tag: "Tool" },
          { id: "t24", text: "Install Mailmeteor Chrome extension for Gmail mail merges", tag: "Tool" },
          { id: "t25", text: "Set up Calendly free tier for scheduling discovery calls", tag: "Tool" },
          { id: "t26", text: "Create a simple Canva portfolio/intro deck (free tier)", tag: "Tool" },
        ]
      },
      {
        id: "d1_6", day: "Day 6", title: "Cold Email Templates",
        tasks: [
          { id: "t27", text: "Write 3 cold email templates (problem-focused, not pitch-focused)", tag: "Copy" },
          { id: "t28", text: "Write 2 LinkedIn connection message variants (no pitch)", tag: "Copy" },
          { id: "t29", text: "Write 1 LinkedIn follow-up message template (day 3 follow-up)", tag: "Copy" },
          { id: "t30", text: "Write a soft-pitch LinkedIn message (day 14 touchpoint)", tag: "Copy" },
        ]
      },
      {
        id: "d1_7", day: "Day 7", title: "Week 1 Review & Week 2 Prep",
        tasks: [
          { id: "t31", text: "Review all profiles — are they consistent across all platforms?", tag: "Review" },
          { id: "t32", text: "Build first prospect list — 50 names from LinkedIn (your ICP)", tag: "Research" },
          { id: "t33", text: "Use Apollo.io to find and verify emails for at least 20 prospects", tag: "Research" },
          { id: "t34", text: "Add all prospects to HubSpot CRM with source/notes", tag: "CRM" },
        ]
      },
      {
        id: "d1_8", day: "Day 8–10", title: "LinkedIn Warm-Up",
        tasks: [
          { id: "t35", text: "Send 15 connection requests/day to ICP prospects (NO pitch in request)", tag: "LinkedIn" },
          { id: "t36", text: "Comment meaningfully on 5 posts by target prospects daily", tag: "LinkedIn" },
          { id: "t37", text: "Post first LinkedIn content piece (insight, opinion, or mini case study)", tag: "Content" },
          { id: "t38", text: "Join 5–8 relevant LinkedIn Groups in your niche", tag: "LinkedIn" },
          { id: "t39", text: "Engage with 3 posts in each group you joined", tag: "LinkedIn" },
        ]
      },
      {
        id: "d1_9", day: "Day 11–14", title: "First Upwork Proposals + Reddit Setup",
        tasks: [
          { id: "t40", text: "Apply to 5–8 relevant Upwork jobs (posted within last 3 hours)", tag: "Upwork" },
          { id: "t41", text: "Customize each Upwork proposal — reference their specific project details", tag: "Upwork" },
          { id: "t42", text: "Create Reddit account + join r/entrepreneur, r/startups, r/SaaS, r/forhire", tag: "Reddit" },
          { id: "t43", text: "Answer 3–5 questions genuinely in those subreddits (no pitch)", tag: "Reddit" },
          { id: "t44", text: "Post a service listing in r/forhire", tag: "Reddit" },
          { id: "t45", text: "Join 3 Facebook groups for startup founders / tech outsourcing", tag: "Social" },
        ]
      },
    ]
  },
  {
    id: "phase2",
    label: "Phase 2 — Outreach Engine",
    weekRange: "Week 3–6",
    days: [
      {
        id: "d2_1", day: "Day 15–17", title: "Cold Outreach Launch",
        tasks: [
          { id: "t46", text: "Begin cold email sequence — 10–15 personalized emails/day", tag: "Email" },
          { id: "t47", text: "Send LinkedIn messages to accepted connections from week 2", tag: "LinkedIn" },
          { id: "t48", text: "Track every outreach touch in HubSpot CRM with date and status", tag: "CRM" },
          { id: "t49", text: "Follow up on Day 3 of any LinkedIn connections that haven't replied", tag: "Follow-up" },
          { id: "t50", text: "Post second LinkedIn content piece (problem your niche faces)", tag: "Content" },
        ]
      },
      {
        id: "d2_2", day: "Day 18–21", title: "Outreach Scaling & Facebook Strategy",
        tasks: [
          { id: "t51", text: "Build prospect list #2 — 50 more names, different sub-niche or role", tag: "Research" },
          { id: "t52", text: "Start engaging in Facebook groups — answer questions, add value", tag: "Social" },
          { id: "t53", text: "Introduce yourself in 2–3 FB groups (short, not salesy)", tag: "Social" },
          { id: "t54", text: "Send day-7 follow-up emails to week 3 cold email list", tag: "Follow-up" },
          { id: "t55", text: "Apply to 5–8 more Upwork jobs (maintain daily cadence)", tag: "Upwork" },
          { id: "t56", text: "Third LinkedIn post — share a client win, project story, or lesson", tag: "Content" },
        ]
      },
      {
        id: "d2_3", day: "Day 22–28", title: "First Responses & Discovery Calls",
        tasks: [
          { id: "t57", text: "Reply to every LinkedIn/email response within 2 hours max", tag: "Responses" },
          { id: "t58", text: "Send Calendly link for discovery calls to warm prospects", tag: "Sales" },
          { id: "t59", text: "Prepare 5 discovery call questions focused on their pain, budget, timeline", tag: "Sales" },
          { id: "t60", text: "Run first discovery calls — listen 70%, talk 30%", tag: "Sales" },
          { id: "t61", text: "Send follow-up email after each call within 1 hour with summary + next steps", tag: "Sales" },
          { id: "t62", text: "Update CRM with call notes and move leads through pipeline stages", tag: "CRM" },
        ]
      },
      {
        id: "d2_4", day: "Day 29–35", title: "Proposals & Referral Foundation",
        tasks: [
          { id: "t63", text: "Create a clean proposal template in Google Docs or Canva (free)", tag: "Sales" },
          { id: "t64", text: "Send tailored proposals to post-call prospects within 24 hours", tag: "Sales" },
          { id: "t65", text: "Follow up on proposals every 3 days until closed or dead", tag: "Follow-up" },
          { id: "t66", text: "Ask personal contacts if they know anyone who needs dev services", tag: "Referral" },
          { id: "t67", text: "Post week 5 LinkedIn content — industry trend or tech insight", tag: "Content" },
          { id: "t68", text: "Reach 100 total prospects touched — review open/response rates", tag: "Review" },
        ]
      },
    ]
  },
  {
    id: "phase3",
    label: "Phase 3 — Refinement",
    weekRange: "Week 7–10",
    days: [
      {
        id: "d3_1", day: "Day 36–42", title: "A/B Test & Double Down",
        tasks: [
          { id: "t69", text: "Compare email subject line performance — test 2 variants", tag: "Test" },
          { id: "t70", text: "Identify which LinkedIn message template got highest response rate", tag: "Test" },
          { id: "t71", text: "Drop what isn't working — kill bottom 50% of templates", tag: "Strategy" },
          { id: "t72", text: "Build prospect list #3 (100 names) — refined based on what's working", tag: "Research" },
          { id: "t73", text: "Publish LinkedIn article (500–800 words) on a niche topic your ICP cares about", tag: "Content" },
        ]
      },
      {
        id: "d3_2", day: "Day 43–49", title: "First Client Onboarding & Case Study",
        tasks: [
          { id: "t74", text: "Document the project scope and deliverables clearly for first client", tag: "Client" },
          { id: "t75", text: "Start building case study draft — problem, solution, result format", tag: "Content" },
          { id: "t76", text: "Ask client for a Clutch.co review (extremely valuable — do this early)", tag: "Reviews" },
          { id: "t77", text: "Ask client for a Google review for Aspire Enterprise", tag: "Reviews" },
          { id: "t78", text: "Continue cold outreach — don't slow down because one deal is active", tag: "Outreach" },
        ]
      },
      {
        id: "d3_3", day: "Day 50–56", title: "Niche Community Presence",
        tasks: [
          { id: "t79", text: "Find 2–3 niche Slack communities in your target vertical and join them", tag: "Community" },
          { id: "t80", text: "Engage daily in Slack communities — answer questions, be genuinely helpful", tag: "Community" },
          { id: "t81", text: "Post in r/forhire again with an updated service listing", tag: "Reddit" },
          { id: "t82", text: "Connect with other Pakistani IT firms — explore white-label partnerships", tag: "Partners" },
          { id: "t83", text: "Reach out to US-based digital agencies for subcontracting opportunities", tag: "Partners" },
        ]
      },
      {
        id: "d3_4", day: "Day 57–70", title: "Pipeline Review & Optimization",
        tasks: [
          { id: "t84", text: "Review full HubSpot pipeline — what stage are deals getting stuck?", tag: "CRM" },
          { id: "t85", text: "Run weekly 30-min pipeline review every Monday going forward", tag: "Process" },
          { id: "t86", text: "Improve Upwork profile with any new skills, outcomes, or reviews gained", tag: "Upwork" },
          { id: "t87", text: "Update Clutch and GoodFirms profiles with any new project info", tag: "Directory" },
          { id: "t88", text: "Write and publish a second LinkedIn article (case study format)", tag: "Content" },
        ]
      },
    ]
  },
  {
    id: "phase4",
    label: "Phase 4 — Scale",
    weekRange: "Week 11–13",
    days: [
      {
        id: "d4_1", day: "Day 71–77", title: "Referral System & Partnerships",
        tasks: [
          { id: "t89", text: "Create a simple referral incentive for existing clients (discount, rev-share)", tag: "Referral" },
          { id: "t90", text: "Formally ask all current clients for 1–2 referrals", tag: "Referral" },
          { id: "t91", text: "Reach out to US digital marketing agencies for white-label dev partnerships", tag: "Partners" },
          { id: "t92", text: "Contact 5 IT staffing/sourcing firms about subcontracting arrangement", tag: "Partners" },
          { id: "t93", text: "List Aspire Enterprise on Sortlist.com (free tier available)", tag: "Directory" },
        ]
      },
      {
        id: "d4_2", day: "Day 78–84", title: "Content Engine Momentum",
        tasks: [
          { id: "t94", text: "Set a content calendar — 3 LinkedIn posts/week minimum going forward", tag: "Content" },
          { id: "t95", text: "Repurpose your best LinkedIn post into a short email newsletter", tag: "Content" },
          { id: "t96", text: "Publish completed case study on LinkedIn as an article", tag: "Content" },
          { id: "t97", text: "Share case study in relevant Reddit and Facebook communities", tag: "Content" },
        ]
      },
      {
        id: "d4_3", day: "Day 85–90", title: "Review, Plan & Reinvest",
        tasks: [
          { id: "t98", text: "Review all 90-day metrics — leads generated, calls booked, deals closed", tag: "Review" },
          { id: "t99", text: "Identify your top 2 lead sources — double down on those", tag: "Strategy" },
          { id: "t100", text: "If revenue is flowing — consider LinkedIn Sales Navigator ($80/mo)", tag: "Upgrade" },
          { id: "t101", text: "If Upwork is working — consider boosting profile visibility with Connects", tag: "Upgrade" },
          { id: "t102", text: "Plan 90-day roadmap #2 with updated ICP and higher targets", tag: "Strategy" },
          { id: "t103", text: "Celebrate — you have built a lead generation system from zero!", tag: "Win" },
        ]
      },
    ]
  }
]

export function getAllTaskIds(): string[] {
  return PLAN_DATA.flatMap(p => p.days.flatMap(d => d.tasks.map(t => t.id)))
}

export function getTotalTaskCount(): number {
  return getAllTaskIds().length
}
