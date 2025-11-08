import { Button } from "@/components/ui/button";
import { Radar, MessageCircle, Share2, Users, EyeOff } from "lucide-react";

interface ActionBarProps {
  onAction: (action: string) => void;
}

export const ActionBar = ({ onAction }: ActionBarProps) => {
  const actions = [
    {
      icon: Radar,
      label: "Start Micro Meetup",
      action: "meetup",
      gradient: "from-primary to-secondary",
    },
    {
      icon: MessageCircle,
      label: "Say Hello to Everyone",
      action: "hello",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Share2,
      label: "Share My DevPass",
      action: "share",
      gradient: "from-accent to-primary",
    },
    {
      icon: Users,
      label: "Find Collaborator",
      action: "collaborate",
      gradient: "from-primary to-accent",
    },
    {
      icon: EyeOff,
      label: "Stealth Mode",
      action: "stealth",
      gradient: "from-muted to-muted-foreground",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl p-6">
        <div className="backdrop-blur-xl bg-card/60 border border-primary/30 rounded-2xl p-4 shadow-[0_-10px_50px_hsl(189,100%,50%/0.2)]">
          <div className="flex items-center justify-between gap-3">
            {actions.map(({ icon: Icon, label, action, gradient }) => (
              <Button
                key={action}
                onClick={() => onAction(action)}
                className="flex-1 h-16 backdrop-blur-md bg-gradient-to-r group relative overflow-hidden border border-primary/30 hover:border-primary/60 transition-all hover:shadow-[0_0_30px_hsl(189,100%,50%/0.4)]"
                variant="ghost"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative flex flex-col items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
