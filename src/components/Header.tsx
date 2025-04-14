
import { Language } from "@/types";
import { getTranslation } from "@/utils/i18n";
import { Shield } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <Shield className="h-8 w-8 text-fortipass-purple" />
        <h1 className="text-2xl font-bold tracking-tight text-fortipass-charcoal">
          {getTranslation("title", language)}
        </h1>
      </div>
      <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
    </header>
  );
};

export default Header;
