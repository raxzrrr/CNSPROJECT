import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Evaluation from "./pages/Evaluation";
import CaptchaProject from "./pages/projects/CaptchaProject";
import CryptoLibrary from "./pages/projects/CryptoLibrary";
import PasswordCracker from "./pages/projects/PasswordCracker";
import SubstitutionCipher from "./pages/projects/SubstitutionCipher";
import Firewall from "./pages/Firewall";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/projects/captcha" element={<CaptchaProject />} />
          <Route path="/projects/crypto-library" element={<CryptoLibrary />} />
          <Route path="/projects/password-cracker" element={<PasswordCracker />} />
          <Route path="/projects/substitution-cipher" element={<SubstitutionCipher />} />
          <Route path="/projects/firewall" element={<Firewall />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
