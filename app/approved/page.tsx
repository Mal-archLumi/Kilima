import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Download, 
  Eye, 
  Filter,
  Calendar,
  MapPin,
  BarChart
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const approvedClaims = [
  { id: 1, name: "John Kamau", location: "Kiambu", acres: 5, amount: "KES 120,000", date: "2024-01-15", images: 4 },
  { id: 2, name: "Sarah Akinyi", location: "Kakamega", acres: 7, amount: "KES 185,000", date: "2024-01-12", images: 6 },
  { id: 3, name: "James Mwangi", location: "Murang'a", acres: 3, amount: "KES 75,000", date: "2024-01-13", images: 3 },
  { id: 4, name: "Paul Omondi", location: "Kisii", acres: 10, amount: "KES 250,000", date: "2024-01-10", images: 8 },
  { id: 5, name: "Grace Wambui", location: "Nyeri", acres: 6, amount: "KES 150,000", date: "2024-01-08", images: 5 },
  { id: 6, name: "David Kipchoge", location: "Uasin Gishu", acres: 15, amount: "KES 320,000", date: "2024-01-05", images: 7 },
]

export default function ApprovedClaimsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Approved Claims</h1>
          <p className="text-muted-foreground">
            Verified and approved insurance claims
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>All Approved Claims</span>
              <Badge variant="secondary" className="gap-2">
                <CheckCircle className="h-3 w-3" />
                6 Approved
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {approvedClaims.map((claim) => (
                <div
                  key={claim.id}
                  className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-500/10 p-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">{claim.name}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {claim.location}
                        </span>
                        <span>{claim.acres} acres</span>
                        <span>{claim.images} images</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">{claim.amount}</p>
                      <p className="text-sm text-muted-foreground">{claim.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
              <BarChart className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">KES 1,100,000</div>
              <p className="text-xs text-muted-foreground">
                Across all approved claims
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Farm Size</CardTitle>
              <MapPin className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7.7 acres</div>
              <p className="text-xs text-muted-foreground">
                Per approved claim
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4 days</div>
              <p className="text-xs text-muted-foreground">
                Average verification time
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}