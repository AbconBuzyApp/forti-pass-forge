
import { Language } from "@/types";
import { getTranslation } from "@/utils/i18n";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="w-full py-6 px-6 bg-white border-t mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          {getTranslation("footer", language)}
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-fortipass-purple transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
