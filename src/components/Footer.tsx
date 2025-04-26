
import { Language } from "@/types";
import { Link } from "react-router-dom";

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
        <div className="flex items-center gap-4">
          <Link to="/about" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
            À propos
          </Link>
          <Link to="/legal" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
            Mentions légales
          </Link>
          <Link to="/privacy" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
            Conditions d'utilisation
          </Link>
          <Link to="/contact" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
