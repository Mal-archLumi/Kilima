"use client"

import { useState } from "react"
import { MapPin, ZoomIn, ZoomOut, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const farms = [
  { id: 1, x: 25, y: 30, verified: true },
  { id: 2, x: 70, y: 45, verified: false },
  { id: 3, x: 45, y: 70, verified: true },
  { id: 4, x: 85, y: 25, verified: false },
  { id: 5, x: 60, y: 60, verified: true },
]

export function VerificationMap() {
  const [zoom, setZoom] = useState(1)

  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg border bg-gradient-to-br from-gray-900 to-black">
      {/* Map Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Farm Points */}
      {farms.map((farm) => (
        <div
          key={farm.id}
          className="absolute cursor-pointer transition-transform hover:scale-125"
          style={{ left: `${farm.x}%`, top: `${farm.y}%` }}
        >
          <MapPin
            className={`h-6 w-6 ${
              farm.verified
                ? "text-green-500 fill-green-500/20"
                : "text-yellow-500 fill-yellow-500/20"
            }`}
          />
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setZoom(Math.min(2, zoom + 0.2))}
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
      </div>

      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3">
        <p className="text-sm font-medium">Active Farm Locations</p>
        <p className="text-xs text-muted-foreground">3 verified, 2 pending</p>
      </div>
    </div>
  )
}