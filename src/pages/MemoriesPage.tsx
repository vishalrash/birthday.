import "../assets/bluehearts.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingAnimations from "@/components/FloatingAnimations";
import MusicPlayer from "@/components/MusicPlayer";

// Import ALL images
import img1 from "../assets/memories/img1.jpg";
import img2 from "../assets/memories/img2.jpg";
import img3 from "../assets/memories/img3.jpg";
import img4 from "../assets/memories/img4.jpg";
import img5 from "../assets/memories/img5.jpg";
import img6 from "../assets/memories/img6.jpg";
import img7 from "../assets/memories/img7.jpg";
import img8 from "../assets/memories/img8.jpg";
import img9 from "../assets/memories/img9.jpg";

const MemoriesPage = () => {
  const navigate = useNavigate();

  // Use your 9 images + descriptions
  const memories = [
    { id: 1, url: img1, desc: "Happy birthday shanthini buddy 🫂 hope u will shine this year too " },
    { id: 2, url: img2, desc: "Madam LinkedIn-ku matum nalla pose tharenga, aana nerla pose koduka sonna teriyatha maari nikkuriye bruhh 😂" },
    { id: 3, url: img3, desc: "My cute bestie 😁 whatever you ask, I'll do for you — but athuku nu ellathiyum ketu tholaikadha di 😅" },
    { id: 4, url: img4, desc: "Apdiye neeyum enakku assignments la eluthi kodukkanum 😝 because nee thaan en friend uu 😁" },
    { id: 5, url: img5, desc: "Apram naa solvatha kelu 😂 ‘keka maate’ nu sollakudadhu 🤫 athukum entha solratha kooda kudathu" },
    { id: 6, url: img6, desc: "Silent ah iruka kudathu… mood off aana sollu 😌 naa advice panna ketukanum 😁 good girl 😁" },
    { id: 7, url: img7, desc: "Summa drama panna kudadhu 😂" },
    { id: 8, url: img8, desc: "Venum nu nk la solli enna verupethura vela la vachu kadhura 🤨😂" },
    { id: 9, url: img9, desc: "You are my bestest friend 😁 and this bond must continue lifelong 🤞🏻 Happy Birthday Shanthiniii 🐾😁" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-background p-4 md:p-8 relative overflow-hidden">

      {/* Existing floating animations */}
      <FloatingAnimations />
      <MusicPlayer autoPlay />

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Page content */}
      <div className="max-w-6xl mx-auto space-y-12 relative z-20">

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Beautiful Memories 📸</h1>
          <p className="text-xl text-muted-foreground">Every moment with you is precious ✨</p>
        </div>

        {/* Zig-Zag Layout */}
        <div className="flex flex-col gap-12">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <img
                src={memory.url}
                className="w-[260px] h-[260px] object-cover rounded-2xl shadow-xl border-4 border-blue-300 hover:scale-105 transition-all"
                alt={`Memory ${memory.id}`}
              />

              <p className="text-lg md:text-xl max-w-md text-center md:text-left">
                {memory.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={() => navigate("/thank-you")}
            size="lg"
            className="text-lg px-8 py-6 font-semibold shadow-lg hover:scale-105"
          >
            Continue to Final Message 💌
          </Button>
        </div>

      </div>
    </div>
  );
};

export default MemoriesPage;
