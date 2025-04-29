
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

interface BlogProps {
  language: Language;
}

const Blog = ({ language: initialLanguage }: BlogProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const getArticleContent = () => {
    if (language === "fr") {
      return {
        title: "Guide Ultime: Créer des Mots de Passe Inviolables en 2025",
        intro: "La sécurité en ligne commence par un mot de passe robuste. Dans un monde où les violations de données sont de plus en plus fréquentes, protéger vos comptes avec des mots de passe forts est votre première ligne de défense contre les cyberattaques.",
        whyImportant: "Pourquoi des Mots de Passe Forts Sont Essentiels",
        whyContent: "Un mot de passe faible peut être déchiffré en quelques secondes par des logiciels modernes. Les pirates informatiques utilisent des techniques sophistiquées comme les attaques par force brute, le phishing, et l'ingénierie sociale pour compromettre vos comptes. Un mot de passe fort est votre rempart contre ces menaces croissantes.",
        characteristics: "Caractéristiques d'un Mot de Passe Sécurisé",
        characteristicsItems: [
          "Longueur: Au moins 12 caractères",
          "Complexité: Mélange de lettres majuscules/minuscules, chiffres et symboles",
          "Unicité: Différent pour chaque compte",
          "Non-prédictible: Évitez les informations personnelles ou mots du dictionnaire"
        ],
        commonMistakes: "Erreurs Courantes à Éviter",
        mistakesContent: "Beaucoup d'utilisateurs compromettent leur sécurité en utilisant des mots de passe trop simples, en les réutilisant sur plusieurs sites, ou en les notant de manière non sécurisée. Évitez ces pièges pour maintenir vos comptes protégés.",
        toolsSection: "Outils et Techniques pour Renforcer Votre Sécurité",
        toolsContent: "Les gestionnaires de mots de passe et l'authentification à deux facteurs offrent des couches supplémentaires de protection. Un générateur de mots de passe comme Fortress Password Generator peut créer instantanément des mots de passe complexes qui sont difficiles à pirater mais faciles à gérer.",
        conclusion: "Conclusion",
        conclusionContent: "La création de mots de passe sécurisés ne doit pas être compliquée. Avec les bonnes techniques et outils, vous pouvez considérablement renforcer votre sécurité en ligne avec un effort minimal.",
        cta: "Pour créer instantanément des mots de passe ultra-sécurisés, essayez",
        author: "Auteur: Acra Conte"
      };
    } else if (language === "es") {
      return {
        title: "Guía Definitiva: Crear Contraseñas Inquebrantables en 2025",
        intro: "La seguridad en línea comienza con una contraseña robusta. En un mundo donde las violaciones de datos son cada vez más frecuentes, proteger sus cuentas con contraseñas fuertes es su primera línea de defensa contra los ciberataques.",
        whyImportant: "Por Qué las Contraseñas Fuertes Son Esenciales",
        whyContent: "Una contraseña débil puede ser descifrada en segundos por software moderno. Los piratas informáticos utilizan técnicas sofisticadas como ataques de fuerza bruta, phishing e ingeniería social para comprometer sus cuentas. Una contraseña fuerte es su baluarte contra estas crecientes amenazas.",
        characteristics: "Características de una Contraseña Segura",
        characteristicsItems: [
          "Longitud: Al menos 12 caracteres",
          "Complejidad: Mezcla de letras mayúsculas/minúsculas, números y símbolos",
          "Unicidad: Diferente para cada cuenta",
          "No predecible: Evite información personal o palabras del diccionario"
        ],
        commonMistakes: "Errores Comunes a Evitar",
        mistakesContent: "Muchos usuarios comprometen su seguridad usando contraseñas demasiado simples, reutilizándolas en múltiples sitios, o anotándolas de manera insegura. Evite estas trampas para mantener sus cuentas protegidas.",
        toolsSection: "Herramientas y Técnicas para Fortalecer Su Seguridad",
        toolsContent: "Los gestores de contraseñas y la autenticación de dos factores ofrecen capas adicionales de protección. Un generador de contraseñas como Fortress Password Generator puede crear instantáneamente contraseñas complejas que son difíciles de piratear pero fáciles de gestionar.",
        conclusion: "Conclusión",
        conclusionContent: "Crear contraseñas seguras no tiene que ser complicado. Con las técnicas y herramientas adecuadas, puede fortalecer significativamente su seguridad en línea con un esfuerzo mínimo.",
        cta: "Para crear instantáneamente contraseñas ultra seguras, pruebe",
        author: "Autor: Acra Conte"
      };
    } else {
      // Default English
      return {
        title: "Ultimate Guide: Creating Unbreakable Passwords in 2025",
        intro: "Online security begins with a strong password. In a world where data breaches are increasingly common, protecting your accounts with robust passwords is your first line of defense against cyber attacks.",
        whyImportant: "Why Strong Passwords Matter",
        whyContent: "A weak password can be cracked in seconds by modern software. Hackers use sophisticated techniques like brute force attacks, phishing, and social engineering to compromise your accounts. A strong password is your bulwark against these growing threats.",
        characteristics: "Characteristics of a Secure Password",
        characteristicsItems: [
          "Length: At least 12 characters",
          "Complexity: Mix of uppercase/lowercase letters, numbers, and symbols",
          "Uniqueness: Different for each account",
          "Unpredictability: Avoid personal information or dictionary words"
        ],
        commonMistakes: "Common Password Mistakes to Avoid",
        mistakesContent: "Many users compromise their security by using overly simple passwords, reusing them across multiple sites, or recording them insecurely. Avoid these pitfalls to keep your accounts protected.",
        toolsSection: "Tools and Techniques to Strengthen Your Security",
        toolsContent: "Password managers and two-factor authentication provide additional layers of protection. A password generator like Fortress Password Generator can instantly create complex passwords that are difficult to hack but easy to manage.",
        conclusion: "Conclusion",
        conclusionContent: "Creating secure passwords doesn't have to be complicated. With the right techniques and tools, you can significantly strengthen your online security with minimal effort.",
        cta: "To instantly create ultra-secure passwords, try",
        author: "Author: Acra Conte"
      };
    }
  };

  const content = getArticleContent();

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Navigation language={language} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold mb-6 text-fortipass-charcoal">{content.title}</h1>
          
          <p className="mb-6 text-gray-700 leading-relaxed">{content.intro}</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-fortipass-charcoal">{content.whyImportant}</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">{content.whyContent}</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-fortipass-charcoal">{content.characteristics}</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            {content.characteristicsItems.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-fortipass-charcoal">{content.commonMistakes}</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">{content.mistakesContent}</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-fortipass-charcoal">{content.toolsSection}</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">{content.toolsContent}</p>
          
          <h3 className="text-xl font-semibold mb-4 text-fortipass-charcoal">{content.conclusion}</h3>
          <p className="mb-6 text-gray-700 leading-relaxed">{content.conclusionContent}</p>
          
          <p className="text-center mb-6">
            <span className="font-bold">{content.cta} </span>
            <a 
              href="https://fortresspassgen.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-fortipass-purple hover:underline"
            >
              Fortress Password Generator
            </a>
          </p>
          
          <p className="text-right text-sm text-gray-500 italic mt-8">{content.author}</p>
        </article>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Blog;
