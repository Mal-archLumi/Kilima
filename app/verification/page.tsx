"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  CheckCircle, 
  XCircle, 
  MapPin, 
  Upload,
  User,
  Phone,
  Mail,
  Crop
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VerificationPage() {
  const [verificationStatus, setVerificationStatus] = useState<"pending" | "verified" | "suspicious">("pending")
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" })

  const handleVerify = (status: "verified" | "suspicious") => {
    setVerificationStatus(status)
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Verification</h1>
          <p className="text-muted-foreground">
            Enter farmer details and coordinates for insurance verification
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => handleVerify("verified")}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Mark as Verified
          </Button>
          <Button
            onClick={() => handleVerify("suspicious")}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Flag as Suspicious
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList>
          <TabsTrigger value="details">Farmer Details</TabsTrigger>
          <TabsTrigger value="location">Farm Location</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter farmer's full name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Phone
                    </Label>
                    <Input id="phone" placeholder="+254 700 000000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="farmer@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="id">National ID Number</Label>
                  <Input id="id" placeholder="Enter national ID" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crop className="h-5 w-5" />
                  Farm Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="crop">Crop Type</Label>
                  <Input id="crop" placeholder="e.g., Maize, Coffee, Tea" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Farm Size (acres)</Label>
                  <Input id="size" type="number" placeholder="Enter size in acres" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insurance">Insurance Policy Number</Label>
                  <Input id="insurance" placeholder="Policy number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="claim">Claim Amount</Label>
                  <Input id="claim" placeholder="KES" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="location">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Farm Coordinates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input
                    id="latitude"
                    value={coordinates.lat}
                    onChange={(e) => setCoordinates({ ...coordinates, lat: e.target.value })}
                    placeholder="e.g., -1.2921"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input
                    id="longitude"
                    value={coordinates.lng}
                    onChange={(e) => setCoordinates({ ...coordinates, lng: e.target.value })}
                    placeholder="e.g., 36.8219"
                  />
                </div>
              </div>

              <div className="rounded-lg border h-[400px] relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                {/* Mock Map */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                
                {/* Map Center Point */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-green-500/40" />
                    <MapPin className="h-8 w-8 text-green-500 fill-green-500/20" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium">Satellite View</p>
                  <p className="text-xs text-muted-foreground">Live farm imagery</p>
                </div>

                <Button className="absolute bottom-4 right-4">
                  <Upload className="mr-2 h-4 w-4" />
                  Capture Coordinates
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any additional observations about the farm location..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {verificationStatus !== "pending" && (
        <Card className={`border-2 ${
          verificationStatus === "verified" 
            ? "border-green-500/50 bg-green-500/5" 
            : "border-red-500/50 bg-red-500/5"
        }`}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {verificationStatus === "verified" ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500" />
                )}
                <div>
                  <p className="font-medium">
                    Marked as {verificationStatus === "verified" ? "Verified" : "Suspicious"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {verificationStatus === "verified" 
                      ? "Claim approved for processing" 
                      : "Requires physical inspection"}
                  </p>
                </div>
              </div>
              <Button>Submit Verification</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}