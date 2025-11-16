import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && autoPlay) {
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={togglePlay}
        size="icon"
        className="rounded-full bg-primary/90 hover:bg-primary shadow-lg backdrop-blur-sm transition-all hover:scale-110"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
      </Button>

      <audio ref={audioRef} loop src="/Nanbiye-MassTamilan.io.mp3" />
    </div>
  );
};

export default MusicPlayer;
