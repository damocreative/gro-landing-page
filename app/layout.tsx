import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import HubSpotScript from "@/components/hubspot-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GRO Compliance Check-Up | TASC Corporate Services",
  description: "Uncover hidden compliance risks before they impact your business operations in Saudi Arabia.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
