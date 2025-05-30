import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Shield, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const inter = Inter({ subsets: ["latin"] })

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#specs", label: "Specs" },
  { href: "/#team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
  { href: "/specs", label: "Technical Details" },
]

export const metadata = {
  title: "RAKSHAK - Autonomous Surveillance Rover",
  description: "AI-Powered Intruder Detection and Real-Time Surveillance",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Navbar with theme toggle and mobile menu */}
          <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold">
                <Shield className="h-6 w-6 text-primary" />
                RAKSHAK
              </Link>
              {/* Desktop nav */}
              <nav className="hidden md:flex gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* Right side: theme toggle and mobile menu */}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                {/* Mobile menu */}
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                      <div className="flex flex-col gap-6 mt-8">
                        {navItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="text-lg font-medium transition-colors hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}