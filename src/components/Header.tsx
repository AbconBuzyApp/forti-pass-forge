
import { Language } from "@/types";
import { getTranslation } from "@/utils/i18n";
import { Moon, Shield, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  // Theme state management
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Initialize theme from localStorage or system preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Apply theme changes to document
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-fortipass-charcoal dark:text-white shadow-sm">
      <div className="flex items-center gap-2">
        <Shield className="h-8 w-8 text-fortipass-purple" />
        <h1 className="text-2xl font-bold tracking-tight text-fortipass-charcoal dark:text-white">
          {getTranslation("title", language)}
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Switch 
            checked={theme === "dark"} 
            onCheckedChange={toggleTheme} 
            aria-label="Toggle dark mode"
          />
          <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>
        <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
      </div>
    </header>
  );
};

export default Header;
