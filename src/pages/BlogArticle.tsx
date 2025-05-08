
import { useState, useEffect } from "react";
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { Button } from "@/components/ui/button";

interface BlogArticleProps {
  language: Language;
}

const BlogArticle = ({ language: initialLanguage }: BlogArticleProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <Navigation language={language} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">
              {language === "fr" ? "Article Non Trouvé" : 
               language === "es" ? "Artículo No Encontrado" : 
               "Article Not Found"}
            </h1>
            <p className="mb-8">
              {language === "fr" ? "L'article que vous cherchez n'existe pas." : 
               language === "es" ? "El artículo que estás buscando no existe." : 
               "The article you are looking for does not exist."}
            </p>
            <Link to="/blog">
              <Button variant="default">
                {language === "fr" ? "Retour au Blog" : 
                 language === "es" ? "Volver al Blog" : 
                 "Back to Blog"}
              </Button>
            </Link>
          </div>
        </main>
        <Footer language={language} />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Navigation language={language} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <article>
            <h1 className="text-4xl font-bold mb-4">{article.title[language]}</h1>
            <div className="flex justify-between items-center text-gray-600 mb-8">
              <span>{article.date} | {article.author}</span>
              <div className="flex items-center">
                {article.keywords.slice(0, 3).map((keyword, index) => (
                  <span key={index} className="text-sm bg-gray-100 rounded-full px-3 py-1 mr-2">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content[language] }} />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-fortipass-purple text-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3">
                  {language === "fr" ? "Protégez Vos Informations En Ligne" : 
                   language === "es" ? "Proteja Su Información En Línea" : 
                   "Protect Your Online Information"}
                </h3>
                <p className="mb-4">
                  {language === "fr" ? "Générez un mot de passe fort et sécurisé maintenant avec notre outil gratuit." : 
                   language === "es" ? "Genere una contraseña fuerte y segura ahora con nuestra herramienta gratuita." : 
                   "Generate a strong and secure password now with our free tool."}
                </p>
                <Link to="/">
                  <Button className="bg-white text-fortipass-purple hover:bg-gray-100">
                    {language === "fr" ? "Créer Un Mot de Passe Sécurisé" : 
                     language === "es" ? "Crear Una Contraseña Segura" : 
                     "Create A Secure Password"}
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default BlogArticle;
