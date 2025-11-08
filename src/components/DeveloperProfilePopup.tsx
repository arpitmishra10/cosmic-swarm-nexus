import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, UserPlus, Calendar, Share2, Eye } from "lucide-react";

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

interface DeveloperProfilePopupProps {
  developer: Developer;
  onClose: () => void;
  onAction: (action: string) => void;
}

export const DeveloperProfilePopup = ({
  developer,
  onClose,
  onAction,
}: DeveloperProfilePopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-background/30 animate-fade-in-up">
      <div className="relative w-full max-w-md mx-4">
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-card/80 border-2 border-primary/30 rounded-3xl p-8 shadow-[0_0_60px_hsl(189,100%,50%/0.4)]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-neon flex items-center justify-center text-4xl font-bold shadow-[0_0_30px_hsl(189,100%,50%/0.6)] mb-4">
              {developer.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              {developer.name}
            </h2>
            <p className="text-sm text-muted-foreground mb-2">{developer.devId}</p>
            <Badge variant="outline" className="border-accent/50 text-accent">
              {developer.rank}
            </Badge>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Top Skills</h3>
            <div className="flex flex-wrap gap-2">
              {developer.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-secondary/30 border border-secondary/50 hover:border-secondary/80 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* DevPass Stamps */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">DevPass Stamps</h3>
            <div className="grid grid-cols-4 gap-2">
              {["🏆", "⭐", "🚀", "💎", "🎯", "🔥", "⚡", "🌟"].map((stamp, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg backdrop-blur-md bg-muted/30 border border-primary/20 flex items-center justify-center text-2xl hover:scale-110 hover:border-primary/50 transition-all"
                >
                  {stamp}
                </div>
              ))}
            </div>
          </div>

          {/* Info Bar */}
          <div className="flex items-center justify-between mb-6 p-3 rounded-xl backdrop-blur-md bg-muted/20 border border-primary/10">
            <div className="text-center flex-1">
              <p className="text-xs text-muted-foreground mb-1">Distance</p>
              <p className="text-sm font-semibold text-primary">{developer.distance}m</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center flex-1">
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <p className="text-sm font-semibold text-secondary">{developer.status}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => onAction("connect")}
              className="w-full backdrop-blur-md bg-primary/20 border-2 border-primary hover:bg-primary/30 hover:shadow-[0_0_30px_hsl(189,100%,50%/0.5)] transition-all"
              variant="ghost"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Connect
            </Button>
            <div className="grid grid-cols-3 gap-3">
              <Button
                onClick={() => onAction("invite")}
                className="backdrop-blur-md bg-secondary/20 border border-secondary/50 hover:border-secondary hover:shadow-[0_0_20px_hsl(270,70%,60%/0.4)] transition-all"
                variant="ghost"
              >
                <Calendar className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => onAction("share-devpass")}
                className="backdrop-blur-md bg-accent/20 border border-accent/50 hover:border-accent hover:shadow-[0_0_20px_hsl(320,90%,60%/0.4)] transition-all"
                variant="ghost"
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => onAction("view-full")}
                className="backdrop-blur-md bg-primary/20 border border-primary/50 hover:border-primary hover:shadow-[0_0_20px_hsl(189,100%,50%/0.4)] transition-all"
                variant="ghost"
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
