import { useState } from "react";
import { CosmicBackground } from "@/components/CosmicBackground";
import { RadarScanner } from "@/components/RadarScanner";
import { DevelopersList } from "@/components/DevelopersList";
import { ActionBar } from "@/components/ActionBar";
import { SwarmOverlay } from "@/components/SwarmOverlay";
import { DeveloperProfilePopup } from "@/components/DeveloperProfilePopup";
import { useToast } from "@/hooks/use-toast";

// Mock data
const mockDevelopers = [
  {
    id: "1",
    name: "Alex Chen",
    devId: "DEV#8472",
    skills: ["React", "TypeScript", "Node.js"],
    distance: 150,
    angle: 45,
    status: "Open for collab",
    avatar: "",
    rank: "Elite",
  },
  {
    id: "2",
    name: "Sarah Park",
    devId: "DEV#2341",
    skills: ["Python", "AI/ML", "TensorFlow"],
    distance: 320,
    angle: 120,
    status: "Looking for team",
    avatar: "",
    rank: "Master",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    devId: "DEV#5629",
    skills: ["Web3", "Solidity", "React"],
    distance: 580,
    angle: 200,
    status: "Mentor available",
    avatar: "",
    rank: "Legend",
  },
  {
    id: "4",
    name: "Priya Sharma",
    devId: "DEV#9123",
    skills: ["UI/UX", "Figma", "React"],
    distance: 240,
    angle: 310,
    status: "Open for collab",
    avatar: "",
    rank: "Elite",
  },
  {
    id: "5",
    name: "Tom Wilson",
    devId: "DEV#4567",
    skills: ["Mobile", "Flutter", "Firebase"],
    distance: 890,
    angle: 75,
    status: "Looking for team",
    avatar: "",
    rank: "Master",
  },
  {
    id: "6",
    name: "Elena Rodriguez",
    devId: "DEV#7891",
    skills: ["DevOps", "AWS", "Docker"],
    distance: 450,
    angle: 160,
    status: "Mentor available",
    avatar: "",
    rank: "Elite",
  },
];

const Index = () => {
  const [showSwarmOverlay, setShowSwarmOverlay] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState<typeof mockDevelopers[0] | null>(null);
  const { toast } = useToast();

  const handleDeveloperClick = (dev: typeof mockDevelopers[0]) => {
    setSelectedDeveloper(dev);
  };

  const handleActionBarAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      meetup: "Starting Micro Meetup...",
      hello: "Saying hello to everyone nearby!",
      share: "Sharing your DevPass...",
      collaborate: "Finding collaborators...",
      stealth: "Stealth mode toggled",
    };

    toast({
      title: "Action Triggered",
      description: actionMessages[action] || "Action executed",
    });
  };

  const handleSwarmAction = (action: string) => {
    if (action === "close") {
      setShowSwarmOverlay(false);
      return;
    }

    const actionMessages: Record<string, string> = {
      "swarm-chat": "Joining Swarm Chat...",
      "form-team": "Forming instant team...",
      "share-all": "Sharing DevPass with all nearby developers...",
    };

    toast({
      title: "Swarm Action",
      description: actionMessages[action] || "Action executed",
    });
  };

  const handleProfileAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      connect: "Connection request sent!",
      invite: "Meeting invite sent!",
      "share-devpass": "DevPass shared!",
      "view-full": "Opening full profile...",
    };

    toast({
      title: "Profile Action",
      description: actionMessages[action] || "Action executed",
    });

    setSelectedDeveloper(null);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <CosmicBackground />

      {/* Header */}
      <header className="relative z-10 pt-12 pb-8 text-center">
        <div className="inline-block animate-float">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Hyperlocal Swarm Mode
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover & connect with developers in your vicinity
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-300px)]">
          {/* Radar Section */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <RadarScanner
              developers={mockDevelopers}
              onDeveloperClick={handleDeveloperClick}
            />
          </div>

          {/* Developers List */}
          <div className="lg:col-span-1">
            <DevelopersList
              developers={mockDevelopers}
              onDeveloperClick={handleDeveloperClick}
            />
          </div>
        </div>
      </main>

      {/* Action Bar */}
      <ActionBar onAction={handleActionBarAction} />

      {/* Swarm Overlay */}
      {showSwarmOverlay && (
        <SwarmOverlay
          developerCount={mockDevelopers.length}
          onAction={handleSwarmAction}
        />
      )}

      {/* Developer Profile Popup */}
      {selectedDeveloper && (
        <DeveloperProfilePopup
          developer={selectedDeveloper}
          onClose={() => setSelectedDeveloper(null)}
          onAction={handleProfileAction}
        />
      )}

      {/* Swarm Trigger Button (hidden, for demo) */}
      <button
        onClick={() => setShowSwarmOverlay(true)}
        className="fixed top-4 right-4 px-4 py-2 backdrop-blur-xl bg-primary/20 border border-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-all z-50"
      >
        Trigger Swarm (Demo)
      </button>
    </div>
  );
};

export default Index;
