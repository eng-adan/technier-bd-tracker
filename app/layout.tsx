import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Technier BD Tracker — 90-Day Lead Gen Plan",
  description: "B2B lead generation roadmap tracker for Technier / Aspire Enterprise",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
