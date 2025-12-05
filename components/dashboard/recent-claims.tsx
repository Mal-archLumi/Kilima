import { CheckCircle, XCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const claims = [
  { id: 1, farmer: "John Kamau", location: "Kiambu", acres: 5, status: "verified", date: "2024-01-15" },
  { id: 2, farmer: "Mary Wanjiku", location: "Nakuru", acres: 8, status: "pending", date: "2024-01-14" },
  { id: 3, farmer: "Peter Otieno", location: "Kisumu", acres: 12, status: "suspicious", date: "2024-01-14" },
  { id: 4, farmer: "James Mwangi", location: "Murang'a", acres: 3, status: "verified", date: "2024-01-13" },
  { id: 5, farmer: "Sarah Akinyi", location: "Kakamega", acres: 7, status: "verified", date: "2024-01-12" },
]

export function RecentClaims() {
  return (
    <div className="space-y-4">
      {claims.map((claim) => (
        <div
          key={claim.id}
          className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary p-2">
              {claim.status === "verified" && <CheckCircle className="h-5 w-5 text-green-500" />}
              {claim.status === "pending" && <Clock className="h-5 w-5 text-yellow-500" />}
              {claim.status === "suspicious" && <XCircle className="h-5 w-5 text-red-500" />}
            </div>
            <div>
              <p className="font-medium">{claim.farmer}</p>
              <p className="text-sm text-muted-foreground">{claim.location} • {claim.acres} acres</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge
              variant={
                claim.status === "verified"
                  ? "default"
                  : claim.status === "pending"
                  ? "secondary"
                  : "destructive"
              }
            >
              {claim.status}
            </Badge>
            <span className="text-sm text-muted-foreground">{claim.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}