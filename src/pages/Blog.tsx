
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState } from "react";

interface BlogProps {
  language: Language;
}

const Blog = ({ language: initialLanguage }: BlogProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Navigation language={language} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === "fr" ? "Blog" : language === "es" ? "Blog" : "Blog"}
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <p className="text-gray-600 text-center">
              {language === "fr" 
                ? "Articles à venir prochainement ! Restez à l'écoute pour des mises à jour sur la sécurité des mots de passe, les meilleures pratiques et plus encore."
                : language === "es"
                ? "¡Artículos próximamente! Manténgase atento para actualizaciones sobre seguridad de contraseñas, mejores prácticas y más."
                : "Articles coming soon! Stay tuned for updates about password security, best practices, and more."}
            </p>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Blog;
