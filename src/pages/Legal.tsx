
import { Language } from "@/types";

interface LegalProps {
  language: Language;
}

const Legal = ({ language }: LegalProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-fortipass-charcoal">
        {language === "fr" ? "Mentions légales" : "Legal Notice"}
      </h1>
      
      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Propriétaire du site</h2>
          <p>SecuPasswordGen</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
          <p>Le site est hébergé par Hostinger.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Directeur de la publication</h2>
          <p>SecuPasswordGen</p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
