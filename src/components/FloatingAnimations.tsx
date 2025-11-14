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
    
    // Create many more cats (12 instead of 4)
    for (let i = 0; i < 12; i++) {
      floatingItems.push({
        id: floatingItems.length,
        type: "cat",
        style: {
          top: `${Math.random() * 90 + 5}%`,
          left: `-100px`,
          animationDelay: `${i * 8}s`,
          animationDuration: `${35 + Math.random() * 25}s`,
        },
      });
    }

    // Create many more kitkats (12 instead of 4)
    for (let i = 0; i < 12; i++) {
      floatingItems.push({
        id: floatingItems.length,
        type: "kitkat",
        style: {
          top: `${Math.random() * 90 + 5}%`,
          left: `-100px`,
          animationDelay: `${i * 9}s`,
          animationDuration: `${40 + Math.random() * 25}s`,
        },
      });
    }

    // Create many more clouds (15 instead of 6)
    for (let i = 0; i < 15; i++) {
      floatingItems.push({
        id: floatingItems.length,
        type: "cloud",
        style: {
          top: `${Math.random() * 85 + 5}%`,
          left: `-200px`,
          animationDelay: `${i * 6}s`,
          animationDuration: `${45 + Math.random() * 35}s`,
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
