
import { getTranslation } from "@/utils/i18n";
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState } from "react";

interface AboutProps {
  language: Language;
}

const About = ({ language: initialLanguage }: AboutProps) => {
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
          {language === "fr" ? "À propos de Fortress Password Generator" : 
           language === "es" ? "Acerca de Fortress Password Generator" : 
           "About Fortress Password Generator"}
        </h1>
        
        <div className="space-y-6 text-gray-700">
          <div className="mb-6">
            <p className="text-lg font-medium">
              {language === "fr" ? "Propriétaire de la plateforme:" : 
               language === "es" ? "Propietario de la plataforma:" : 
               "Platform Owner:"}
            </p>
            <p className="text-xl font-bold">Acrad Conte</p>
          </div>
          
          <p className="text-lg">
            {language === "fr" ? 
              "Fortress Password Generator a été conçu avec un seul objectif en tête : aider les utilisateurs à générer des mots de passe sécurisés et robustes pour protéger leurs informations personnelles et professionnelles." : 
             language === "es" ? 
              "Fortress Password Generator fue diseñado con un solo objetivo en mente: ayudar a los usuarios a generar contraseñas seguras y robustas para proteger su información personal y profesional." : 
              "Fortress Password Generator was designed with a single goal in mind: to help users generate secure and robust passwords to protect their personal and professional information."}
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              {language === "fr" ? "Notre mission" : 
               language === "es" ? "Nuestra misión" : 
               "Our mission"}
            </h2>
            <p>
              {language === "fr" ? 
                "Nous nous engageons à fournir un générateur de mots de passe rapide, fiable et sécurisé, adapté à tous les utilisateurs, qu'ils soient novices ou experts en cybersécurité." : 
               language === "es" ? 
                "Nos comprometemos a proporcionar un generador de contraseñas rápido, confiable y seguro, adecuado para todos los usuarios, ya sean principiantes o expertos en ciberseguridad." : 
                "We are committed to providing a fast, reliable, and secure password generator, suitable for all users, whether they are novices or cybersecurity experts."}
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              {language === "fr" ? "Pourquoi nous choisir ?" : 
               language === "es" ? "¿Por qué elegirnos?" : 
               "Why choose us?"}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {language === "fr" ? "Outil simple et rapide à utiliser." : 
                 language === "es" ? "Herramienta simple y rápida de usar." : 
                 "Simple and quick tool to use."}
              </li>
              <li>
                {language === "fr" ? "Sécurité renforcée pour générer des mots de passe aléatoires et personnalisés." : 
                 language === "es" ? "Seguridad mejorada para generar contraseñas aleatorias y personalizadas." : 
                 "Enhanced security to generate random and customized passwords."}
              </li>
              <li>
                {language === "fr" ? "Interface claire et facile d'accès." : 
                 language === "es" ? "Interfaz clara y de fácil acceso." : 
                 "Clear and easily accessible interface."}
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default About;
