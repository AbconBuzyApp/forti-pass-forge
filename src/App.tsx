
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import CookieConsent from "./components/CookieConsent";
import { Language } from "./types";
import BlogArticle from "./pages/BlogArticle";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<Language>("en");

  // Apply theme from localStorage on initial render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="transition-colors duration-200 dark:bg-fortipass-charcoal min-h-screen flex flex-col">
            <Routes>
              <Route path="/" element={<Index language={language} onLanguageChange={handleLanguageChange} />} />
              <Route path="/about" element={<About language={language} />} />
              <Route path="/privacy" element={<Privacy language={language} />} />
              <Route path="/legal" element={<Legal language={language} />} />
              <Route path="/contact" element={<Contact language={language} />} />
              <Route path="/blog" element={<Blog language={language} onLanguageChange={handleLanguageChange} />} />
              <Route path="/blog/:slug" element={<BlogArticle language={language} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent language={language} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
