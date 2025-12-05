"use client"

import { Home, FileCheck, Map, Users, ShieldAlert, Settings, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "New Verification", icon: FileCheck, href: "/verification" },
  { name: "Satellite View", icon: Map, href: "/satellite" },
  { name: "Approved Claims", icon: Users, href: "/approved" },
  { name: "Suspicious Claims", icon: ShieldAlert, href: "/suspicious" },
  { name: "Analytics", icon: BarChart, href: "/analytics" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 border-r">
      <div className="p-6">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Button
                key={item.name}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isActive && "bg-secondary"
                )}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </Button>
            )
          })}
        </nav>
        <div className="mt-8 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10 p-4">
          <p className="text-sm font-medium">Need help?</p>
          <p className="text-xs text-muted-foreground mt-1">
            Contact support for assistance with claims
          </p>
          <Button className="mt-3 w-full" size="sm">
            Get Help
          </Button>
        </div>
      </div>
    </aside>
  )
}