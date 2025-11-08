import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Developer {
  id: string;
  name: string;
  devId: string;
  skills: string[];
  distance: number;
  angle: number;
  status: string;
  avatar: string;
  rank: string;
}

interface RadarScannerProps {
  developers: Developer[];
  onDeveloperClick: (dev: Developer) => void;
}

export const RadarScanner = ({ developers, onDeveloperClick }: RadarScannerProps) => {
  const [hoveredDev, setHoveredDev] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Radar Circles */}
      <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-primary/20 animate-pulse-glow" />
      <div className="absolute w-[450px] h-[450px] rounded-full border-2 border-primary/30" />
      <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-primary/40" />
      <div className="absolute w-[150px] h-[150px] rounded-full border border-primary/50" />

      {/* Center Dot */}
      <div className="absolute w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(189,100%,50%)]" />

      {/* Radar Sweep Line */}
      <div className="absolute w-[600px] h-[600px]">
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[2px] origin-left -translate-y-1/2 animate-radar-sweep">
          <div className="w-full h-full bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
      </div>

      {/* Developer Pings */}
      {developers.map((dev) => {
        const radius = (dev.distance / 1000) * 250; // max 250px radius
        const x = Math.cos((dev.angle * Math.PI) / 180) * radius;
        const y = Math.sin((dev.angle * Math.PI) / 180) * radius;

        return (
          <div
            key={dev.id}
            className="absolute cursor-pointer transition-transform hover:scale-125"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredDev(dev.id)}
            onMouseLeave={() => setHoveredDev(null)}
            onClick={() => onDeveloperClick(dev)}
          >
            {/* Ping Animation */}
            <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping-radar" />
            
            {/* Developer Dot */}
            <div className="relative w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_hsl(270,70%,60%)]" />

            {/* Hover Card */}
            {hoveredDev === dev.id && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-64 p-4 backdrop-blur-xl bg-card/80 border border-primary/30 rounded-lg shadow-[0_0_30px_hsl(189,100%,50%/0.3)] animate-fade-in-up z-50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-neon" />
                  <div>
                    <p className="font-bold text-foreground">{dev.name}</p>
                    <p className="text-xs text-muted-foreground">{dev.devId}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {dev.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-primary/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{dev.distance}m away • {dev.status}</p>
              </div>
            )}
          </div>
        );
      })}

      {/* Distance Labels */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-primary/60">
        1km
      </div>
      <div className="absolute top-[calc(50%-75px)] left-1/2 -translate-x-1/2 text-xs text-primary/60">
        500m
      </div>
    </div>
  );
};
