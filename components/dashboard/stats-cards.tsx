// /components/dashboard/stats-cards.tsx
import { CheckCircle, AlertTriangle, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { title: "Total Verified", value: "1,284", icon: CheckCircle, color: "text-green-500" },
  { title: "Pending Review", value: "42", icon: Clock, color: "text-yellow-500" },
  { title: "Suspicious", value: "18", icon: AlertTriangle, color: "text-red-500" },
  { title: "Total Farmers", value: "2,543", icon: Users, color: "text-blue-500" },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}