
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface BlogProps {
  language: Language;
  onLanguageChange?: (language: Language) => void;
}

const Blog = ({ language: initialLanguage, onLanguageChange }: BlogProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();
  const articlesPerPage = isMobile ? 4 : 6; // Moins d'articles par page sur mobile
  
  // On met en avant le premier article comme article vedette
  const featuredArticle = blogArticles[0];
  
  // On prend tous les articles sauf le premier (vedette) pour la pagination
  const remainingArticles = blogArticles.slice(1);
  
  // Calculer l'index de début et de fin pour la pagination
  const indexOfFirstArticle = (currentPage - 1) * articlesPerPage;
  const indexOfLastArticle = indexOfFirstArticle + articlesPerPage;
  const currentArticles = remainingArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  
  // Calculer le nombre total de pages
  const totalPages = Math.ceil(remainingArticles.length / articlesPerPage);
  
  // Vérifier que les articles sont correctement chargés
  useEffect(() => {
    console.log("Nombre total d'articles:", blogArticles.length);
    console.log("Articles restants pour pagination:", remainingArticles.length);
    console.log("Articles actuels:", currentArticles.length);
    console.log("Nombre total de pages:", totalPages);
  }, [currentPage]);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray dark:bg-fortipass-charcoal">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Navigation language={language} />
      
      {/* Main Navigation Links visible on all devices */}
      <div className="flex justify-center bg-white dark:bg-fortipass-charcoal py-3 shadow-sm mb-4">
        <div className="container mx-auto flex justify-center space-x-2 md:space-x-8 px-2 flex-wrap">
          <Link to="/" className="font-medium text-gray-700 dark:text-white hover:text-fortipass-purple py-2 text-sm md:text-base">
            {language === "fr" ? "Accueil" : language === "es" ? "Inicio" : "Home"}
          </Link>
          <Link to="/blog" className="font-medium text-fortipass-purple hover:text-fortipass-dark-purple py-2 text-sm md:text-base">
            {language === "fr" ? "Blog" : language === "es" ? "Blog" : "Blog"}
          </Link>
          <Link to="/about" className="font-medium text-gray-700 dark:text-white hover:text-fortipass-purple py-2 text-sm md:text-base">
            {language === "fr" ? "À propos" : language === "es" ? "Sobre nosotros" : "About Us"}
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 dark:text-white hover:text-fortipass-purple py-2 text-sm md:text-base">
            {language === "fr" ? "Contact" : language === "es" ? "Contacto" : "Contact Us"}
          </Link>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-3 md:px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center dark:text-white">
            {language === "fr" ? "Articles sur la Sécurité des Mots de Passe" : 
             language === "es" ? "Artículos sobre Seguridad de Contraseñas" : 
             "Password Security Articles"}
          </h1>
          
          {/* Display featured article - Optimized for mobile */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6 mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 dark:text-white">{featuredArticle.title[language]}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2 md:mb-3 text-sm md:text-base">{featuredArticle.date} | {featuredArticle.author}</p>
            <p className="text-gray-700 dark:text-gray-200 mb-4 md:mb-6 text-sm md:text-base line-clamp-3 md:line-clamp-none">{featuredArticle.excerpt[language]}</p>
            <div className="flex justify-between items-center">
              <Link to={`/blog/${featuredArticle.slug}`} className="text-fortipass-purple hover:text-fortipass-dark-purple font-medium text-sm md:text-base">
                {language === "fr" ? "Lire l'article" : 
                 language === "es" ? "Leer artículo" : 
                 "Read article"}
              </Link>
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {language === "fr" ? "Temps de lecture: 8 min" : 
                 language === "es" ? "Tiempo de lectura: 8 min" : 
                 "Reading time: 8 min"}
              </span>
            </div>
          </div>
          
          {/* Article list - Optimized for mobile display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {currentArticles.map(article => (
              <div key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-white">{article.title[language]}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1 md:mb-2 text-sm">{article.date} | {article.author}</p>
                <p className="text-gray-700 dark:text-gray-200 mb-3 md:mb-4 line-clamp-3 text-sm md:text-base">{article.excerpt[language]}</p>
                <Link to={`/blog/${article.slug}`} className="text-fortipass-purple hover:text-fortipass-dark-purple font-medium text-sm md:text-base">
                  {language === "fr" ? "Lire la suite" : 
                   language === "es" ? "Leer más" : 
                   "Read more"}
                </Link>
              </div>
            ))}
          </div>
          
          {/* Pagination - Optimized for mobile */}
          {totalPages > 1 && (
            <Pagination className="mt-6 md:mt-8">
              <PaginationContent className="flex-wrap justify-center">
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(currentPage - 1)} 
                      href="#"
                      className={isMobile ? "p-1 text-sm" : ""}
                    />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      onClick={() => handlePageChange(page)} 
                      isActive={currentPage === page}
                      href="#"
                      className={isMobile ? "h-8 w-8 text-sm" : ""}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(currentPage + 1)} 
                      href="#"
                      className={isMobile ? "p-1 text-sm" : ""}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}

          {/* Call to Action - Optimized for mobile */}
          <div className="bg-fortipass-purple text-white rounded-lg shadow-md p-5 md:p-8 my-8 md:my-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              {language === "fr" ? "Protégez Vos Comptes Dès Maintenant" : 
               language === "es" ? "Proteja Sus Cuentas Ahora" : 
               "Protect Your Accounts Now"}
            </h3>
            <p className="mb-4 md:mb-6 text-sm md:text-lg">
              {language === "fr" ? "Générez des mots de passe ultra-sécurisés avec notre outil gratuit." : 
               language === "es" ? "Genere contraseñas ultra seguras con nuestra herramienta gratuita." : 
               "Generate ultra-secure passwords with our free tool."}
            </p>
            <Link to="/">
              <Button className="bg-white text-fortipass-purple hover:bg-gray-100 font-bold py-2 md:py-3 px-4 md:px-6 text-sm md:text-base">
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
