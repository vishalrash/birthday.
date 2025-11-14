import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { toast } from "sonner";
import FloatingAnimations from "@/components/FloatingAnimations";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Change this password to whatever you want
    if (password === "SHANTHINI" || password === "shanthini") {
      navigate("/birthday-wish");
    } else {
      toast.error("Oops! Wrong password. Try again! 🎂");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 via-blue-100 to-background p-4 relative">
      <FloatingAnimations />
      
      <Card className="w-full max-w-md p-8 bg-card/95 backdrop-blur-sm shadow-2xl border-2 border-primary/20 animate-fade-in relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Lock className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              🎉 Secret Birthday Surprise! 🎉
            </h1>
            <p className="text-muted-foreground">
              Enter the magic password to unlock your special day
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center text-lg h-12 border-2"
            />
            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold"
              size="lg"
            >
              Unlock 🔓
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            Hint: Think celebration! 🎂
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PasswordPage;
