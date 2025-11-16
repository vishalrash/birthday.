import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

const MusicPlayer = ({ autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("global-music") as HTMLAudioElement;
    if (!audio) return;

    if (autoPlay) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = () => {
    const audio = document.getElementById("global-music") as HTMLAudioElement;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={togglePlay}
        size="icon"
        className="rounded-full bg-primary/90 hover:bg-primary shadow-lg backdrop-blur-sm transition-all hover:scale-110"
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;
