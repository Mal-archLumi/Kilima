import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  AlertTriangle, 
  Eye, 
  MapPin,
  UserCheck,
  Clock,
  Send
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const suspiciousClaims = [
  { id: 1, name: "Peter Otieno", location: "Kisumu", reason: "Inconsistent imagery", date: "2024-01-14", priority: "high" },
  { id: 2, name: "Jane Mumbi", location: "Embu", reason: "Multiple claims", date: "2024-01-13", priority: "medium" },
  { id: 3, name: "Robert Kariuki", location: "Thika", reason: "Location mismatch", date: "2024-01-12", priority: "high" },
  { id: 4, name: "Lucy Njeri", location: "Machakos", reason: "Unverified documents", date: "2024-01-11", priority: "low" },
]

export default function SuspiciousClaimsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Suspicious Claims</h1>
          <p className="text-muted-foreground">
            Claims flagged for manual inspection
          </p>
        </div>
        <Button>
          <Send className="mr-2 h-4 w-4" />
          Schedule Inspections
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="border-red-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Claims Requiring Action
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suspiciousClaims.map((claim) => (
                <div
                  key={claim.id}
                  className="flex items-center justify-between rounded-lg border border-red-500/20 p-4 hover:bg-destructive/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`rounded-full p-2 ${
                      claim.priority === "high" 
                        ? "bg-red-500/10" 
                        : claim.priority === "medium"
                        ? "bg-yellow-500/10"
                        : "bg-blue-500/10"
                    }`}>
                      <AlertTriangle className={`h-5 w-5 ${
                        claim.priority === "high" 
                          ? "text-red-500" 
                          : claim.priority === "medium"
                          ? "text-yellow-500"
                          : "text-blue-500"
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium">{claim.name}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {claim.location}
                        </span>
                        <span>{claim.reason}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={
                      claim.priority === "high" 
                        ? "destructive" 
                        : claim.priority === "medium"
                        ? "outline"
                        : "secondary"
                    }>
                      {claim.priority} priority
                    </Badge>
                    <span className="text-sm text-muted-foreground">{claim.date}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-3 w-3" />
                        Review
                      </Button>
                      <Button variant="outline" size="sm">
                        <UserCheck className="mr-2 h-3 w-3" />
                        Assign
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Inspection Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {suspiciousClaims.map((claim) => (
                  <div key={claim.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium">{claim.name}</p>
                      <p className="text-sm text-muted-foreground">Scheduled: Tomorrow, 10 AM</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Risk Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>High Risk Claims</span>
                    <span>50%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full w-1/2 bg-red-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Medium Risk</span>
                    <span>25%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full w-1/4 bg-yellow-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Low Risk</span>
                    <span>25%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full w-1/4 bg-blue-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}