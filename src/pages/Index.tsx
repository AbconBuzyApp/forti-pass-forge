
import { useState } from "react";
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";
import { getTranslation } from "@/utils/i18n";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {getTranslation("title", language)}
            </h2>
            <p className="text-gray-600">
              {getTranslation("subtitle", language)}
            </p>
          </div>
          
          <PasswordGenerator language={language} />
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
