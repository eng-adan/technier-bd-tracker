# Technier BD Tracker

A 90-day B2B lead generation tracker with authentication and real-time progress persistence.

## Stack
- Next.js 14 (App Router)
- NextAuth.js (credentials-based auth)
- Upstash Redis (progress persistence)
- Tailwind CSS

## Deploy to Vercel (5 steps)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
gh repo create technier-bd-tracker --public --push
```

### 2. Import on Vercel
Go to https://vercel.com/new → Import your GitHub repo → Deploy

### 3. Add Upstash Redis
Vercel Dashboard → Your Project → Storage → Create Database → Upstash Redis
(This auto-adds UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to env vars)

### 4. Add Environment Variables
In Vercel Dashboard → Settings → Environment Variables:

| Key | Value |
|-----|-------|
| NEXTAUTH_SECRET | Run: `openssl rand -base64 32` |
| NEXTAUTH_URL | Your Vercel URL e.g. https://technier-bd.vercel.app |
| ADMIN_EMAIL | your@email.com |
| ADMIN_PASSWORD_HASH | Generate below |

**Generate password hash:**
```bash
node -e "require('bcryptjs').hash('yourpassword', 10).then(h => console.log(h))"
```

### 5. Redeploy
Vercel Dashboard → Deployments → Redeploy (to pick up the env vars)

## Local Development
```bash
cp .env.example .env.local
# Fill in values (Redis optional — falls back to in-memory)
npm install
npm run dev
```

Default login: admin@technier.com / technier123
