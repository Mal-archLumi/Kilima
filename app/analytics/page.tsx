"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  PieChart,
  Calendar,
  Download,
  Filter,
  Target,
  DollarSign,
  Users,
  Shield
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive insights and performance metrics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Q4 2024
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Claims</CardTitle>
            <Shield className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,842</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +12.5% from last quarter
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payout</CardTitle>
            <DollarSign className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES 42.8M</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +8.3% from last quarter
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Claim Size</CardTitle>
            <Target className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES 23,250</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              -3.2% from last quarter
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Users className="h-5 w-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +2.1% from last quarter
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Claims Overview</span>
              <Badge variant="secondary">Quarterly</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] relative">
              {/* Mock Chart */}
              <div className="absolute inset-0 flex items-end justify-between px-4">
                {[65, 80, 45, 90, 60, 75, 85, 70].map((height, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className="w-8 rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-muted-foreground mt-2">Q{i+1}</span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-t" />
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                <span className="text-sm">Approved</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                <span className="text-sm">Pending</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                <span className="text-sm">Rejected</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Regional Distribution</span>
              <Badge variant="secondary">By County</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { region: "Central Region", claims: 542, percentage: 35 },
                { region: "Rift Valley", claims: 421, percentage: 28 },
                { region: "Western Kenya", claims: 289, percentage: 19 },
                { region: "Eastern Region", claims: 198, percentage: 13 },
                { region: "Coastal", claims: 92, percentage: 6 },
              ].map((item) => (
                <div key={item.region} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.region}</span>
                    <span>{item.claims} claims ({item.percentage}%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
        </TabsList>
        <TabsContent value="performance" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.3 days</div>
                <p className="text-xs text-muted-foreground">
                  Average claim processing time
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Fastest</span>
                    <span className="text-green-500">4 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Slowest</span>
                    <span className="text-yellow-500">7 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Cost Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87.5%</div>
                <p className="text-xs text-muted-foreground">
                  Operational efficiency score
                </p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Cost per claim</span>
                    <span>KES 1,240</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full w-[87.5%] bg-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Low Risk</div>
                <p className="text-xs text-muted-foreground">
                  Overall portfolio risk level
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Low Risk</span>
                    <span className="text-sm">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Medium Risk</span>
                    <span className="text-sm">18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">High Risk</span>
                    <span className="text-sm">4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Recent Activities</span>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-3 w-3" />
              Filter
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New claim submitted", user: "John Kamau", time: "10 min ago", type: "success" },
              { action: "Farm verification completed", user: "System", time: "25 min ago", type: "info" },
              { action: "Risk assessment updated", user: "Sarah M.", time: "1 hour ago", type: "warning" },
              { action: "Payout processed", user: "Finance Dept", time: "2 hours ago", type: "success" },
              { action: "Satellite imagery updated", user: "System", time: "3 hours ago", type: "info" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className={`rounded-full p-2 ${
                    activity.type === "success" ? "bg-green-500/10" :
                    activity.type === "warning" ? "bg-yellow-500/10" :
                    "bg-blue-500/10"
                  }`}>
                    <BarChart3 className={`h-4 w-4 ${
                      activity.type === "success" ? "text-green-500" :
                      activity.type === "warning" ? "text-yellow-500" :
                      "text-blue-500"
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      by {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
                <Badge variant="outline">View</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}