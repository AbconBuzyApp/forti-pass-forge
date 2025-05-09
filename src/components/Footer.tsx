
import { Language } from "@/types";
import { Link } from "react-router-dom";
import { getTranslation } from "@/utils/i18n";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
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
    <footer className="w-full py-6 px-6 bg-white dark:bg-fortipass-charcoal dark:text-white border-t mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 - {language === "fr" ? "Site fondé par Acrad Conte" : language === "es" ? "Sitio fundado por Acrad Conte" : "Site founded by Acrad Conte"}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Switch 
              checked={theme === "dark"} 
              onCheckedChange={toggleTheme} 
              aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
          <Link to="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-fortipass-purple dark:hover:text-fortipass-light-purple transition-colors">
            {language === "fr" ? "À propos" : language === "es" ? "Sobre nosotros" : "About"}
          </Link>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/legal" className="text-sm text-gray-500 dark:text-gray-400 hover:text-fortipass-purple dark:hover:text-fortipass-light-purple transition-colors">
              {language === "fr" ? "Mentions légales" : language === "es" ? "Avisos legales" : "Legal Notice"}
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-fortipass-purple dark:hover:text-fortipass-light-purple transition-colors">
              {language === "fr" ? "Politique de confidentialité" : language === "es" ? "Política de privacidad" : "Privacy Policy"}
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-fortipass-purple dark:hover:text-fortipass-light-purple transition-colors">
              {language === "fr" ? "Conditions d'utilisation" : language === "es" ? "Términos de uso" : "Terms of Use"}
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-fortipass-purple dark:hover:text-fortipass-light-purple transition-colors">
              {language === "fr" ? "Contact" : language === "es" ? "Contacto" : "Contact"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
