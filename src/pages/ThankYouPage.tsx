import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import FloatingAnimations from "@/components/FloatingAnimations";
import MusicPlayer from "@/components/MusicPlayer";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 via-blue-100 to-background p-4 relative overflow-hidden">
      <FloatingAnimations />
      <MusicPlayer autoPlay />
      
      <Card className="w-full max-w-3xl p-8 md:p-12 bg-card/95 backdrop-blur-sm shadow-2xl border-2 border-primary/20 animate-slide-up relative z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center animate-bounce-soft">
            <Heart className="h-16 w-16 md:h-20 md:h-20 text-accent fill-accent" />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Thank You for Being You 💖
            </h1>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                As we close this special journey, I want to express my deepest gratitude 
                for having you in my life. Your friendship, guidance, and constant support 
                have meant the world to me.
              </p>
              
              <p>
                Through every laugh, every adventure, and even the challenging times, 
                you've been there with your unwavering presence and beautiful spirit. 
                Your kindness and wisdom have guided me in ways I can't fully express.
              </p>
              
              <p>
                Thank you for staying by my side, for believing in me, and for making 
                life so much more meaningful. You are truly one of a kind, and I'm 
                blessed to call you my friend.
              </p>
              
              <p className="text-2xl font-bold text-primary pt-4">
                Here's to many more years of friendship! 🎉✨
              </p>
            </div>

            <div className="flex justify-center gap-4 text-4xl animate-float pt-4">
              <span>💝</span>
              <span>🌟</span>
              <span>🎂</span>
              <span>🎈</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ThankYouPage;
