
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Language } from "@/types";

interface NavigationProps {
  language: Language;
}

const Navigation = ({ language }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getNavText = (key: string) => {
    const translations: Record<string, Record<Language, string>> = {
      home: {
        en: "Home",
        fr: "Accueil",
        es: "Inicio"
      },
      about: {
        en: "About",
        fr: "À propos",
        es: "Sobre nosotros"
      },
      blog: {
        en: "Blog",
        fr: "Blog",
        es: "Blog"
      },
      privacy: {
        en: "Privacy",
        fr: "Confidentialité",
        es: "Privacidad"
      },
      legal: {
        en: "Legal",
        fr: "Mentions légales",
        es: "Legal"
      },
      contact: {
        en: "Contact",
        fr: "Contact",
        es: "Contacto"
      }
    };

    return translations[key][language];
  };

  return (
    <nav className="bg-white dark:bg-fortipass-charcoal shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-end py-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 dark:text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("home")}</Link>
                <Link to="/about" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("about")}</Link>
                <Link to="/blog" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("blog")}</Link>
                <Link to="/privacy" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("privacy")}</Link>
                <Link to="/legal" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("legal")}</Link>
                <Link to="/contact" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("contact")}</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex justify-center space-x-6 py-4">
          <Link to="/" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("home")}</Link>
          <Link to="/about" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("about")}</Link>
          <Link to="/blog" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("blog")}</Link>
          <Link to="/privacy" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("privacy")}</Link>
          <Link to="/legal" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("legal")}</Link>
          <Link to="/contact" className="text-gray-700 hover:text-fortipass-purple dark:text-gray-200 dark:hover:text-fortipass-light-purple">{getNavText("contact")}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
