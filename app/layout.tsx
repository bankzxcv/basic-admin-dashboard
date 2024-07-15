import "./globals.css"

import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jirayu Admin Dashboard",
  description: "Admin Dashboard for Jirayu",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <Sidebar></Sidebar>
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
        </div>
      </body>
    </html>
  )
}
