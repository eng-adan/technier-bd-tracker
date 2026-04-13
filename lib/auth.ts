import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

// Default admin user — override via env vars in Vercel dashboard
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@technier.com"
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync("technier123", 10)

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        if (credentials.email !== ADMIN_EMAIL) return null
        const valid = await bcrypt.compare(credentials.password, ADMIN_PASSWORD_HASH)
        if (!valid) return null
        return { id: "1", email: ADMIN_EMAIL, name: "Technier BD" }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret-change-in-production",
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id
      return token
    },
    async session({ session, token }) {
      if (session.user) (session.user as { id?: string }).id = token.id as string
      return session
    },
  },
}
