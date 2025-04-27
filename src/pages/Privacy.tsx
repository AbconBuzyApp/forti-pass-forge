
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState } from "react";

interface PrivacyProps {
  language: Language;
}

const Privacy = ({ language: initialLanguage }: PrivacyProps) => {
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
          {language === "fr" ? "Politique de confidentialité" : 
           language === "es" ? "Política de privacidad" : 
           "Privacy Policy"}
        </h1>
        
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {language === "fr" ? "Informations collectées" : 
               language === "es" ? "Información recopilada" : 
               "Information Collected"}
            </h2>
            <p>
              {language === "fr" 
                ? "Lorsque vous utilisez notre générateur de mots de passe, nous ne collectons aucune information personnelle identifiable, sauf si vous choisissez de nous fournir des informations via le formulaire de contact ou d'autres moyens."
                : language === "es"
                ? "Cuando utiliza nuestro generador de contraseñas, no recopilamos ninguna información personal identificable, a menos que elija proporcionarnos información a través del formulario de contacto u otros medios."
                : "When you use our password generator, we do not collect any personally identifiable information, unless you choose to provide us with information through the contact form or other means."}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {language === "fr" ? "Protection des données" : 
               language === "es" ? "Protección de datos" : 
               "Data Protection"}
            </h2>
            <p>
              {language === "fr"
                ? "Nous nous engageons à protéger vos données personnelles et à les traiter conformément aux lois de confidentialité en vigueur."
                : language === "es"
                ? "Nos comprometemos a proteger sus datos personales y tratarlos de acuerdo con las leyes de privacidad aplicables."
                : "We are committed to protecting your personal data and processing it in accordance with applicable privacy laws."}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {language === "fr" ? "Cookies" : 
               language === "es" ? "Cookies" : 
               "Cookies"}
            </h2>
            <p>
              {language === "fr"
                ? "Notre site utilise des cookies pour améliorer l'expérience utilisateur, notamment pour mémoriser les préférences et améliorer la vitesse de chargement des pages."
                : language === "es"
                ? "Nuestro sitio utiliza cookies para mejorar la experiencia del usuario, incluido el recordar preferencias y mejorar la velocidad de carga de las páginas."
                : "Our site uses cookies to improve the user experience, including remembering preferences and improving page loading speed."}
            </p>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Privacy;
