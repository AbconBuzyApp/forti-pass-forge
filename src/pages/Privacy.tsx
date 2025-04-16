
import { Language } from "@/types";

interface PrivacyProps {
  language: Language;
}

const Privacy = ({ language }: PrivacyProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-fortipass-charcoal">
        {language === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
      </h1>
      
      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Informations collectées</h2>
          <p>
            Lorsque vous utilisez notre générateur de mots de passe, nous ne collectons aucune information
            personnelle identifiable, sauf si vous choisissez de nous fournir des informations via le
            formulaire de contact ou d'autres moyens.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Protection des données</h2>
          <p>
            Nous nous engageons à protéger vos données personnelles et à les traiter conformément aux
            lois de confidentialité en vigueur.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer l'expérience utilisateur, notamment pour
            mémoriser les préférences et améliorer la vitesse de chargement des pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
