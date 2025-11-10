import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingAnimations from "@/components/FloatingAnimations";
import MusicPlayer from "@/components/MusicPlayer";
import memory1 from "@/assets/memories/memory1.jpg";
import memory2 from "@/assets/memories/memory2.jpg";
import memory3 from "@/assets/memories/memory3.jpg";
import memory4 from "@/assets/memories/memory4.jpg";

const MemoriesPage = () => {
  const navigate = useNavigate();

  // Memory images - add more images to src/assets/memories/ folder
  const memoryImages = [memory1, memory2, memory3, memory4];
  
  const memories = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    url: memoryImages[i % memoryImages.length],
    alt: `Memory ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-background p-4 md:p-8 relative overflow-hidden">
      <FloatingAnimations />
      <MusicPlayer autoPlay />
      
      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Beautiful Memories 📸
          </h1>
          <p className="text-xl text-muted-foreground">
            Every moment with you is a treasure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <Card
              key={memory.id}
              className={`overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up border-2 border-primary/20 ${
                index % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={memory.url}
                  alt={memory.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-card/95 backdrop-blur-sm">
                <p className="text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  Memory #{memory.id} 💕
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-8 animate-fade-in">
          <Button
            onClick={() => navigate("/thank-you")}
            size="lg"
            className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Continue to Final Message 💌
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;
