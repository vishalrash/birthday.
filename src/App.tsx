import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PasswordPage from "./pages/PasswordPage";
import BirthdayWishPage from "./pages/BirthdayWishPage";
import BirthdayMessagePage from "./pages/BirthdayMessagePage";
import MemoriesPage from "./pages/MemoriesPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFound from "./pages/NotFound";
import MusicPlayer from "@/components/MusicPlayer";
<MusicPlayer autoPlay={false} />

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/password" replace />} />
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/birthday-wish" element={<BirthdayWishPage />} />
          <Route path="/birthday-message" element={<BirthdayMessagePage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
