"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MapPin, 
  ZoomIn, 
  ZoomOut, 
  RefreshCw, 
  Layers, 
  Ruler,
  Download,
  Calendar,
  Filter,
  Satellite
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const farmLocations = [
  { id: 1, name: "Kamau Farm", lat: -1.2921, lng: 36.8219, status: "verified", acres: 5, date: "2024-01-15" },
  { id: 2, name: "Wanjiku Fields", lat: -0.3031, lng: 36.0800, status: "pending", acres: 8, date: "2024-01-14" },
  { id: 3, name: "Kisumu Valley", lat: -0.1022, lng: 34.7617, status: "suspicious", acres: 12, date: "2024-01-14" },
  { id: 4, name: "Murang'a Hills", lat: -0.7210, lng: 37.1526, status: "verified", acres: 3, date: "2024-01-13" },
]

export default function SatellitePage() {
  const [zoom, setZoom] = useState(1)
  const [selectedLayer, setSelectedLayer] = useState("satellite")

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Satellite View</h1>
          <p className="text-muted-foreground">
            Real-time farm monitoring and satellite imagery analysis
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Satellite className="h-5 w-5" />
                Farm Locations Map
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Live</Badge>
                <span className="text-xs text-muted-foreground">Updated 5 min ago</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-[500px] overflow-hidden rounded-b-lg border-t bg-gradient-to-br from-gray-900 to-black">
                {/* Enhanced Map Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                
                {/* Farm Points */}
                {farmLocations.map((farm) => (
                  <div
                    key={farm.id}
                    className="absolute cursor-pointer transition-all hover:scale-125 group"
                    style={{ 
                      left: `${50 + (farm.lng - 36.8) * 50}%`, 
                      top: `${50 + (farm.lat + 1.2) * 50}%` 
                    }}
                  >
                    <div className="relative">
                      <MapPin
                        className={`h-8 w-8 ${
                          farm.status === "verified"
                            ? "text-green-500 fill-green-500/20"
                            : farm.status === "pending"
                            ? "text-yellow-500 fill-yellow-500/20"
                            : "text-red-500 fill-red-500/20"
                        }`}
                      />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap">
                        {farm.name}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setZoom(Math.min(3, zoom + 0.2))}
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Ruler className="h-4 w-4" />
                  </Button>
                </div>

                {/* Layer Controls */}
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium mb-2">Map Layers</p>
                  <div className="flex gap-2">
                    {["satellite", "terrain", "hybrid"].map((layer) => (
                      <Button
                        key={layer}
                        variant={selectedLayer === layer ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLayer(layer)}
                        className="capitalize"
                      >
                        <Layers className="mr-2 h-3 w-3" />
                        {layer}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Coordinates Display */}
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium">Current View</p>
                  <p className="text-xs text-muted-foreground">
                    Zoom: {zoom.toFixed(1)}x • 4 farms visible
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Imagery</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="monthly">
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly" className="mt-4">
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((month) => (
                      <div key={month} className="aspect-square rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border cursor-pointer hover:border-primary transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.1)_50%,transparent_52%)] bg-[length:20px_20px]" />
                        <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs">
                          Dec 202{3 + month}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Farm Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {farmLocations.map((farm) => (
                  <div
                    key={farm.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="font-medium">{farm.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {farm.acres} acres • {farm.date}
                      </p>
                    </div>
                    <Badge
                      variant={
                        farm.status === "verified"
                          ? "default"
                          : farm.status === "pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {farm.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Satellite Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Image Quality</span>
                  <span>92%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-[92%] bg-green-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Cloud Coverage</span>
                  <span>8%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-[8%] bg-blue-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Update Frequency</span>
                  <span>Daily</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-full bg-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                Add New Marker
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Ruler className="mr-2 h-4 w-4" />
                Measure Area
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Export Coordinates
              </Button>
              <Button className="w-full justify-start">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh All Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}