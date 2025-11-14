import img1 from "../assets/memories/img1.jpg";
import img2 from "../assets/memories/img2.jpg";
import img3 from "../assets/memories/img3.jpg";
import img4 from "../assets/memories/img4.jpg";
import img5 from "../assets/memories/img5.jpg";
import img6 from "../assets/memories/img6.jpg";
import img7 from "../assets/memories/img7.jpg";
import img8 from "../assets/memories/img8.jpg";
import img9 from "../assets/memories/img9.jpg";
import "../blueHearts.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingAnimations from "@/components/FloatingAnimations";
import MusicPlayer from "@/components/MusicPlayer";

const MemoriesPage = () => {
  const navigate = useNavigate();

  // Add descriptions for zig-zag layout
  const memories = [
  { id: 1, url: img1, desc: "Happy birthday shanthini buddy 🫂 hope u will shine this year too " },
  { id: 2, url: img2, desc: "Madam linkedin ku matum nalla pose tharenga aana nerla pose ey koduka sonna teriyatha maari nikkuriye bruhh 😂" },
  { id: 3, url: img3, desc: "My cute bestie ena venalum enta kelu I'll doing it for u no matter what athuku nu elathaiyum ketu tholaikadha ri 😅 naa seiya maate aprom 😼" },
  { id: 4, url: img4, desc: "Apdiye neeyu enaku assignments la eluthi kodukanum 😁 bcoz nee thana en frd uu 😝" },
  { id: 5, url: img5, desc: "Aprm naa solratha la kelu 😂 keka maate nu la sola kudathu 🤫 athuum enta solave kudathuu" },
  { id: 6, url: img6, desc: "apa tension aagi silent aayidra apdi iruka kudathu and naa advice panna ketukanum 😌 Yes Good girl 😁" },
  { id: 7, url: img7, desc: "summa summa katha la kudathu " },
  { id: 8, url: img8, desc: "Venum ne nk la soli ena verupethuru vela la vachukatha pa solita aprmm 🤔" },
  { id: 9, url: img9, desc: "once again Happy 😁 Birthday 😁😁 Shanthiniii 🐾😁" },
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-background p-4 md:p-8 relative overflow-hidden">

      {/* Existing floating animations */}
      <FloatingAnimations />
      <MusicPlayer autoPlay />

      {/* Floating Blue Hearts Background */}
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

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto space-y-8 relative z-20">
        
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            YOUR MEMORIES
          </h1>
          <p className="text-xl text-muted-foreground">
            Every moment you've created
          </p>
        </div>

        {/* ZIG-ZAG MEMORIES LIST */}
        <div className="flex flex-col gap-12">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <img
                src={memory.url}
                className="w-[260px] h-[260px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-all duration-500 border-4 border-blue-300"
                alt="memory"
              />

              {/* Description */}
              <p className="text-lg md:text-xl text-foreground/90 max-w-md text-center md:text-left">
                {memory.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center pt-8 animate-fade-in">
          <Button
            onClick={() => navigate("/thank-you")}
            size="lg"
            className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Continue to Final Message 
          </Button>
        </div>

      </div>
    </div>
  );
};

export default MemoriesPage;
