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
                On this beautiful day, I want you to know how incredibly special you are. 
                Your smile lights up every room, and your kindness touches everyone around you.
              </p>
              
              <p className="group-hover:text-foreground transition-colors">
                Thank you for being such an amazing friend and bringing so much joy into my life. 
                Your presence makes every moment better, and I'm so grateful to celebrate this special day with you!
              </p>
              
              <p className="group-hover:text-foreground transition-colors">
                May this year bring you endless happiness, exciting adventures, and all the love you deserve. 
                You deserve nothing but the best because you ARE the best! 🌟
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
            See Our Memories 📸
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessagePage;
