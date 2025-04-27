
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState } from "react";

interface LegalProps {
  language: Language;
}

const Legal = ({ language: initialLanguage }: LegalProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Navigation language={language} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-fortipass-charcoal">
          {language === "fr" ? "Mentions légales" : 
           language === "es" ? "Avisos legales" : 
           "Legal Notice"}
        </h1>
        
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {language === "fr" ? "Propriétaire du site" : 
               language === "es" ? "Propietario del sitio" : 
               "Site Owner"}
            </h2>
            <p>Fortress Password Generator</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {language === "fr" ? "Hébergement" : 
               language === "es" ? "Alojamiento" : 
               "Hosting"}
            </h2>
            <p>
              {language === "fr" ? "Le site est hébergé par Hostinger." : 
               language === "es" ? "El sitio está alojado por Hostinger." : 
               "The site is hosted by Hostinger."}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {language === "fr" ? "Directeur de la publication" : 
               language === "es" ? "Director de publicación" : 
               "Publication Director"}
            </h2>
            <p>Fortress Password Generator</p>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Legal;
