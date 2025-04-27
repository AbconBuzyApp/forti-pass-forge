
import { Language } from "@/types";
import { Link } from "react-router-dom";
import { getTranslation } from "@/utils/i18n";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="w-full py-6 px-6 bg-white border-t mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          © 2025
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link to="/about" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
            {language === "fr" ? "À propos" : language === "es" ? "Sobre nosotros" : "About"}
          </Link>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/legal" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
              {language === "fr" ? "Mentions légales" : language === "es" ? "Avisos legales" : "Legal Notice"}
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
              {language === "fr" ? "Politique de confidentialité" : language === "es" ? "Política de privacidad" : "Privacy Policy"}
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
              {language === "fr" ? "Conditions d'utilisation" : language === "es" ? "Términos de uso" : "Terms of Use"}
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
              {language === "fr" ? "Contact" : language === "es" ? "Contacto" : "Contact"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
