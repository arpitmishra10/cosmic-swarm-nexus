import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Share2 } from "lucide-react";

interface SwarmOverlayProps {
  developerCount: number;
  onAction: (action: string) => void;
}

export const SwarmOverlay = ({ developerCount, onAction }: SwarmOverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-background/50 animate-fade-in-up">
      {/* Swarm Explosion Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/30 via-secondary/20 to-transparent animate-swarm-explosion" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-secondary/30 via-accent/20 to-transparent animate-swarm-explosion" style={{ animationDelay: "0.2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        {/* Title */}
        <div className="mb-8 animate-float">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Hyperlocal Swarm Activated
          </h1>
          <p className="text-3xl text-foreground">
            {developerCount} Developers Nearby
          </p>
        </div>

        {/* Skill Heatmap Visualization */}
        <div className="mb-8 flex justify-center gap-3 flex-wrap">
          {["React", "TypeScript", "Node.js", "Python", "AI/ML", "Web3", "Mobile", "Design"].map((skill, index) => (
            <div
              key={skill}
              className="px-4 py-2 backdrop-blur-xl bg-card/60 border border-primary/30 rounded-full shadow-[0_0_20px_hsl(189,100%,50%/0.3)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-sm font-medium text-foreground">{skill}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => onAction("swarm-chat")}
            className="px-8 py-6 text-lg backdrop-blur-xl bg-primary/20 border-2 border-primary hover:bg-primary/30 hover:shadow-[0_0_40px_hsl(189,100%,50%/0.6)] transition-all"
            variant="ghost"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Join Swarm Chat
          </Button>
          <Button
            onClick={() => onAction("form-team")}
            className="px-8 py-6 text-lg backdrop-blur-xl bg-secondary/20 border-2 border-secondary hover:bg-secondary/30 hover:shadow-[0_0_40px_hsl(270,70%,60%/0.6)] transition-all"
            variant="ghost"
          >
            <Users className="w-5 h-5 mr-2" />
            Form Instant Team
          </Button>
          <Button
            onClick={() => onAction("share-all")}
            className="px-8 py-6 text-lg backdrop-blur-xl bg-accent/20 border-2 border-accent hover:bg-accent/30 hover:shadow-[0_0_40px_hsl(320,90%,60%/0.6)] transition-all"
            variant="ghost"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share with All
          </Button>
        </div>

        {/* Close button */}
        <button
          onClick={() => onAction("close")}
          className="mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Close Overlay
        </button>
      </div>
    </div>
  );
};
