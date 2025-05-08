
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import { Button } from "@/components/ui/button";

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {language === "fr" ? "Articles sur la Sécurité des Mots de Passe" : 
             language === "es" ? "Artículos sobre Seguridad de Contraseñas" : 
             "Password Security Articles"}
          </h1>
          
          {/* Display featured article */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
            <h2 className="text-2xl font-bold mb-4">{blogArticles[0].title[language]}</h2>
            <p className="text-gray-600 mb-3">{blogArticles[0].date} | {blogArticles[0].author}</p>
            <p className="text-gray-700 mb-6">{blogArticles[0].excerpt[language]}</p>
            <div className="flex justify-between items-center">
              <Link to={`/blog`} className="text-fortipass-purple hover:text-fortipass-dark-purple font-medium">
                {language === "fr" ? "Lire l'article" : 
                 language === "es" ? "Leer artículo" : 
                 "Read article"}
              </Link>
              <span className="text-sm text-gray-500">
                {language === "fr" ? "Temps de lecture: 8 min" : 
                 language === "es" ? "Tiempo de lectura: 8 min" : 
                 "Reading time: 8 min"}
              </span>
            </div>
          </div>
          
          {/* Article list */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogArticles.slice(1).map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{article.title[language]}</h3>
                <p className="text-gray-600 mb-2">{article.date} | {article.author}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt[language]}</p>
                <Link to={`/blog`} className="text-fortipass-purple hover:text-fortipass-dark-purple font-medium">
                  {language === "fr" ? "Lire la suite" : 
                   language === "es" ? "Leer más" : 
                   "Read more"}
                </Link>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-fortipass-purple text-white rounded-lg shadow-md p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === "fr" ? "Protégez Vos Comptes Dès Maintenant" : 
               language === "es" ? "Proteja Sus Cuentas Ahora" : 
               "Protect Your Accounts Now"}
            </h3>
            <p className="mb-6 text-lg">
              {language === "fr" ? "Générez des mots de passe ultra-sécurisés avec notre outil gratuit." : 
               language === "es" ? "Genere contraseñas ultra seguras con nuestra herramienta gratuita." : 
               "Generate ultra-secure passwords with our free tool."}
            </p>
            <Link to="/">
              <Button className="bg-white text-fortipass-purple hover:bg-gray-100 font-bold py-3 px-6">
                {language === "fr" ? "Créer un Mot de Passe Sécurisé" : 
                 language === "es" ? "Crear Contraseña Segura" : 
                 "Create Secure Password"}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Blog;
