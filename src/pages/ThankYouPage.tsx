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
                Having you in my life is one of the quiet blessings I’m truly grateful for.
There’s something about your presence , something calm, kind, and wonderfully genuine ...
that makes everything feel a little lighter and a lot more beautiful.
              </p>
              
              <p>
                You’ve stood by me with patience, warmth, and a heart that understands even the things I don’t say.
Your friendship hasn’t just added joy to my days —
it has added meaning, comfort, and a sense of belonging that I value so deeply.

              </p>
              
              <p>
                Thank you for the moments you made brighter,
for the random conversations that felt like healing,
and for being the kind of person who turns ordinary days into memories I’ll always smile about.

I’m blessed to walk through life with someone as gentle, strong, and truly special as you.
And I hope the years ahead bring you all the happiness you naturally bring to everyone around you. ✨

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
