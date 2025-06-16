import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LEDS - Laboratório de Engenharia e Desenvolvimento de Software",
  description:
    "Laboratório de Engenharia e Desenvolvimento de Software - IFES Campus Serra. Inovação em desenvolvimento de software, inteligência artificial e automação de processos.",
  keywords: ["LEDS", "IFES", "Engenharia de Software", "Desenvolvimento", "Inteligência Artificial", "Automação"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
