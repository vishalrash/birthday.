import { useEffect, useState } from "react";
import catImage from "@/assets/cat.png";
import kitkatImage from "@/assets/kitkat.png";
import cloudImage from "@/assets/cloud.png";

interface FloatingItem {
  id: number;
  type: "cat" | "kitkat" | "cloud";
  style: React.CSSProperties;
}

const FloatingAnimations = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const floatingItems: FloatingItem[] = [];
    
    // Create cats
    for (let i = 0; i < 4; i++) {
      floatingItems.push({
        id: floatingItems.length,
        type: "cat",
        style: {
          top: `${Math.random() * 80 + 10}%`,
          left: `-100px`,
          animationDelay: `${i * 15}s`,
          animationDuration: `${40 + Math.random() * 20}s`,
        },
      });
    }

    // Create kitkats
    for (let i = 0; i < 4; i++) {
      floatingItems.push({
        id: floatingItems.length,
        type: "kitkat",
        style: {
          top: `${Math.random() * 80 + 10}%`,
          left: `-100px`,
          animationDelay: `${i * 18}s`,
          animationDuration: `${45 + Math.random() * 20}s`,
        },
      });
    }

    // Create clouds
    for (let i = 0; i < 6; i++) {
      floatingItems.push({
        id: floatingItems.length,
        type: "cloud",
        style: {
          top: `${Math.random() * 70 + 5}%`,
          left: `-200px`,
          animationDelay: `${i * 10}s`,
          animationDuration: `${50 + Math.random() * 30}s`,
        },
      });
    }

    setItems(floatingItems);
  }, []);

  const getImage = (type: "cat" | "kitkat" | "cloud") => {
    switch (type) {
      case "cat":
        return catImage;
      case "kitkat":
        return kitkatImage;
      case "cloud":
        return cloudImage;
    }
  };

  const getSize = (type: "cat" | "kitkat" | "cloud") => {
    switch (type) {
      case "cat":
        return "w-12 h-12 md:w-16 md:h-16";
      case "kitkat":
        return "w-10 h-10 md:w-14 md:h-14";
      case "cloud":
        return "w-24 h-12 md:w-32 md:h-16";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <img
          key={item.id}
          src={getImage(item.type)}
          alt={item.type}
          className={`absolute ${getSize(item.type)} animate-drift opacity-${
            item.type === "cloud" ? "40" : "60"
          }`}
          style={item.style}
        />
      ))}
    </div>
  );
};

export default FloatingAnimations;
