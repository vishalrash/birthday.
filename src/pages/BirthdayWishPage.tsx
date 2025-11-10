import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import FloatingAnimations from "@/components/FloatingAnimations";
import MusicPlayer from "@/components/MusicPlayer";

const BirthdayWishPage = () => {
  const [musicStarted, setMusicStarted] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setMusicStarted(true);
    setTimeout(() => {
      navigate("/birthday-message");
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 via-blue-100 to-background p-4 relative overflow-hidden">
      <FloatingAnimations />
      {musicStarted && <MusicPlayer autoPlay />}
      
      <Card className="w-full max-w-2xl p-8 md:p-12 bg-card/95 backdrop-blur-sm shadow-2xl border-2 border-primary/20 animate-slide-up relative z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center animate-bounce-soft">
            <Sparkles className="h-16 w-16 md:h-20 md:h-20 text-accent" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              Happy Birthday! 🎂
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in">
              To the most amazing person I know...
            </p>
          </div>

          <div className="flex justify-center gap-4 animate-float">
            <span className="text-4xl md:text-5xl">🎈</span>
            <span className="text-4xl md:text-5xl">🎉</span>
            <span className="text-4xl md:text-5xl">🎁</span>
            <span className="text-4xl md:text-5xl">🎊</span>
          </div>

          <Button
            onClick={handleNext}
            size="lg"
            className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Click to Continue ✨
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BirthdayWishPage;
