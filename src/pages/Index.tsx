
import { useState } from "react";
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PasswordGenerator from "@/components/PasswordGenerator";
import { getTranslation } from "@/utils/i18n";
import { Link } from "react-router-dom";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Navigation language={language} />
      
      {/* Main Navigation Links visible on desktop */}
      <div className="hidden md:flex justify-center bg-white py-3 shadow-sm mb-4">
        <div className="container mx-auto flex justify-center space-x-8">
          <Link to="/" className="font-medium text-fortipass-purple hover:text-fortipass-dark-purple">
            {language === "fr" ? "Accueil" : language === "es" ? "Inicio" : "Home"}
          </Link>
          <Link to="/blog" className="font-medium text-gray-700 hover:text-fortipass-purple">
            {language === "fr" ? "Blog" : language === "es" ? "Blog" : "Blog"}
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-fortipass-purple">
            {language === "fr" ? "À propos" : language === "es" ? "Sobre nosotros" : "About Us"}
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-fortipass-purple">
            {language === "fr" ? "Contact" : language === "es" ? "Contacto" : "Contact Us"}
          </Link>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {language === "fr" ? "Bienvenue sur Fortress Password Generator" : 
               language === "es" ? "Bienvenido a Fortress Password Generator" : 
               "Welcome to Fortress Password Generator"}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {language === "fr" ? 
                "Fortress Password Generator est un outil en ligne sécurisé et rapide pour générer des mots de passe robustes, permettant à nos utilisateurs de protéger leurs informations personnelles et professionnelles." : 
               language === "es" ? 
                "Fortress Password Generator es una herramienta en línea segura y rápida para generar contraseñas robustas, permitiendo a nuestros usuarios proteger su información personal y profesional." : 
                "Fortress Password Generator is a secure and fast online tool for generating robust passwords, allowing our users to protect their personal and professional information."}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  {language === "fr" ? "Génération Sécurisée" : 
                   language === "es" ? "Generación Segura" : 
                   "Secure Generation"}
                </h3>
                <p>
                  {language === "fr" ? "Utilisez notre générateur pour créer des mots de passe aléatoires ou personnalisés." : 
                   language === "es" ? "Utilice nuestro generador para crear contraseñas aleatorias o personalizadas." : 
                   "Use our generator to create random or personalized passwords."}
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  {language === "fr" ? "Sécurité Maximale" : 
                   language === "es" ? "Máxima Seguridad" : 
                   "Maximum Security"}
                </h3>
                <p>
                  {language === "fr" ? "Nos générateurs respectent les normes de sécurité les plus strictes." : 
                   language === "es" ? "Nuestros generadores respetan los estándares de seguridad más estrictos." : 
                   "Our generators respect the strictest security standards."}
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  {language === "fr" ? "Facile à Utiliser" : 
                   language === "es" ? "Fácil de Usar" : 
                   "Easy to Use"}
                </h3>
                <p>
                  {language === "fr" ? "Créez des mots de passe en quelques secondes avec des options de personnalisation." : 
                   language === "es" ? "Cree contraseñas en segundos con opciones de personalización." : 
                   "Create passwords in seconds with customization options."}
                </p>
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
