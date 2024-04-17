import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Theme } from "@radix-ui/themes"
import { SideMenu } from "./_components"
import styles from "./layout.module.css"

import "normalize.css"
import "./globals.css"
import "@radix-ui/themes/styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Super dashboard",
  description: "Your daily dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div className={styles.root}>
            <SideMenu />
            <div style={{ flexGrow: 1 }}>{children}</div>
          </div>
        </Theme>
      </body>
    </html>
  )
}
