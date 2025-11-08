import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Developer {
  id: string;
  name: string;
  devId: string;
  skills: string[];
  distance: number;
  status: string;
  avatar: string;
  rank: string;
}

interface DevelopersListProps {
  developers: Developer[];
  onDeveloperClick: (dev: Developer) => void;
}

export const DevelopersList = ({ developers, onDeveloperClick }: DevelopersListProps) => {
  return (
    <div className="h-full backdrop-blur-xl bg-card/60 border border-primary/20 rounded-2xl shadow-[0_0_40px_hsl(189,100%,50%/0.2)] p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Developers Nearby
        </h2>
        <p className="text-sm text-muted-foreground">
          {developers.length} developers detected
        </p>
      </div>

      <ScrollArea className="h-[calc(100%-100px)]">
        <div className="space-y-3">
          {developers.map((dev, index) => (
            <div
              key={dev.id}
              className="p-4 backdrop-blur-md bg-card/40 border border-primary/10 rounded-xl hover:border-primary/40 hover:shadow-[0_0_20px_hsl(189,100%,50%/0.3)] transition-all cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onDeveloperClick(dev)}
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center text-lg font-bold shadow-[0_0_15px_hsl(189,100%,50%/0.5)] group-hover:shadow-[0_0_25px_hsl(270,70%,60%/0.7)] transition-all">
                  {dev.name.charAt(0)}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Name and DevID */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground truncate">
                      {dev.name}
                    </h3>
                    <Badge variant="outline" className="ml-2 text-xs border-accent/50 text-accent">
                      {dev.rank}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{dev.devId}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {dev.skills.slice(0, 3).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-secondary/30 border border-secondary/40"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Status and Distance */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-primary">{dev.status}</span>
                    <span className="text-muted-foreground">{dev.distance}m away</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
