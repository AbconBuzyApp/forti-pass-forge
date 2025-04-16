
import { getTranslation } from "@/utils/i18n";
import { Language } from "@/types";

interface AboutProps {
  language: Language;
}

const About = ({ language }: AboutProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-fortipass-charcoal">
        {language === "fr" ? "À propos de SecuPasswordGen" : "About SecuPasswordGen"}
      </h1>
      
      <div className="space-y-6 text-gray-700">
        <p className="text-lg">
          SecuPasswordGen a été conçu avec un seul objectif en tête : aider les utilisateurs à générer des mots de passe
          sécurisés et robustes pour protéger leurs informations personnelles et professionnelles.
        </p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
          <p>
            Nous nous engageons à fournir un générateur de mots de passe rapide, fiable et sécurisé,
            adapté à tous les utilisateurs, qu'ils soient novices ou experts en cybersécurité.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Outil simple et rapide à utiliser.</li>
            <li>Sécurité renforcée pour générer des mots de passe aléatoires et personnalisés.</li>
            <li>Interface claire et facile d'accès.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
