
import { useState } from "react";
import { Language } from "@/types";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";
import { getTranslation } from "@/utils/i18n";

const Index = () => {
  const [language, setLanguage] = useState<Language>("fr");

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 py-4">
            <Link to="/" className="text-gray-700 hover:text-fortipass-purple">Accueil</Link>
            <Link to="/about" className="text-gray-700 hover:text-fortipass-purple">À propos</Link>
            <Link to="/privacy" className="text-gray-700 hover:text-fortipass-purple">Confidentialité</Link>
            <Link to="/legal" className="text-gray-700 hover:text-fortipass-purple">Mentions légales</Link>
            <Link to="/contact" className="text-gray-700 hover:text-fortipass-purple">Contact</Link>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Bienvenue sur SecuPasswordGen
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              SecuPasswordGen est un outil en ligne sécurisé et rapide pour générer des mots de passe robustes,
              permettant à nos utilisateurs de protéger leurs informations personnelles et professionnelles.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Génération sécurisée</h3>
                <p>Utilisez notre générateur pour créer des mots de passe aléatoires ou personnalisés.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Sécurité maximale</h3>
                <p>Nos générateurs respectent les normes de sécurité les plus strictes.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Facilité d'utilisation</h3>
                <p>Créez des mots de passe en quelques secondes avec des options de personnalisation.</p>
              </div>
            </div>
          </div>
          
          <PasswordGenerator language={language} />
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
