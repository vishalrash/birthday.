import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingAnimations from "@/components/FloatingAnimations";
import MusicPlayer from "@/components/MusicPlayer";

const BirthdayMessagePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 via-blue-100 to-background p-4 relative overflow-hidden">
      <FloatingAnimations />
      <MusicPlayer autoPlay />
      
      <div className="w-full max-w-3xl space-y-6 animate-fade-in relative z-10">
        <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm shadow-2xl border-2 border-primary/20 hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-500 group">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
              A Special Message for You 💝
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="group-hover:text-foreground transition-colors">
                Happiest birthday to the bestest best friend ever! 💖
You’re the one who brings laughter to my dull days, comfort to my messy moments, and joy to every memory we create.

              </p>
              
              <p className="group-hover:text-foreground transition-colors">
                Thank you for being the girl who understands me without needing words, supports me without conditions, and stays by my side no matter what.

              </p>
              
              <p className="group-hover:text-foreground transition-colors">
                On your special day, I just want you to know this:
You deserve all the happiness, love, success, and magic in the world — today and always.

May this year bless you with everything your heart silently wishes for.
Stay the same amazing, strong, beautiful soul you are.

              </p>
              
              <p className="text-xl font-semibold text-primary group-hover:scale-105 transition-transform inline-block">
                Here's to another year of wonderful memories together! 🎉
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/memories")}
            size="lg"
            className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            See Your Memories 📸
          </Button>
        </div>
      </div>
    </div> 
  );
};

export default BirthdayMessagePage;
