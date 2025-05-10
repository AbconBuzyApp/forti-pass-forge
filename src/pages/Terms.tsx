
import { Language } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState } from "react";

interface TermsProps {
  language: Language;
}

const Terms = ({ language: initialLanguage }: TermsProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const getTermsContent = () => {
    switch (language) {
      case "fr":
        return (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center">Conditions d'Utilisation</h1>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptation des Conditions</h2>
              <p className="mb-4">En utilisant notre service de génération de mots de passe Fortress Password Generator, vous acceptez de vous conformer à ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">2. Description du Service</h2>
              <p className="mb-4">Fortress Password Generator est un outil en ligne qui permet aux utilisateurs de générer des mots de passe sécurisés et robustes. Notre service est fourni gratuitement et vise à améliorer la sécurité des informations personnelles et professionnelles des utilisateurs.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">3. Utilisation du Service</h2>
              <p className="mb-4">Vous acceptez d'utiliser notre service uniquement à des fins légales et conformément à toutes les lois et réglementations applicables. Vous vous engagez à ne pas utiliser notre service pour des activités frauduleuses, malveillantes ou illégales.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">4. Confidentialité et Sécurité</h2>
              <p className="mb-4">Nous nous engageons à protéger la confidentialité de nos utilisateurs. Les mots de passe générés par notre service ne sont pas stockés sur nos serveurs et sont générés localement sur votre appareil. Nous ne collectons pas les mots de passe que vous générez.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">5. Limitation de Responsabilité</h2>
              <p className="mb-4">Notre service est fourni "tel quel" et "selon disponibilité", sans garantie d'aucune sorte, expresse ou implicite. Nous ne garantissons pas que notre service sera ininterrompu, sécurisé ou exempt d'erreurs.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">6. Modifications des Conditions</h2>
              <p className="mb-4">Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site. Votre utilisation continue de notre service après la publication de ces modifications constitue votre acceptation des nouvelles conditions.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">7. Contact</h2>
              <p className="mb-4">Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter via notre page de contact.</p>
            </div>
          </>
        );
      case "es":
        return (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center">Términos de Uso</h1>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-4">Al utilizar nuestro servicio de generación de contraseñas Fortress Password Generator, usted acepta cumplir con estos términos de uso. Si no está de acuerdo con estos términos, por favor no utilice nuestro servicio.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">2. Descripción del Servicio</h2>
              <p className="mb-4">Fortress Password Generator es una herramienta en línea que permite a los usuarios generar contraseñas seguras y robustas. Nuestro servicio se proporciona de forma gratuita y tiene como objetivo mejorar la seguridad de la información personal y profesional de los usuarios.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">3. Uso del Servicio</h2>
              <p className="mb-4">Usted acepta utilizar nuestro servicio únicamente para fines legales y de conformidad con todas las leyes y regulaciones aplicables. Se compromete a no utilizar nuestro servicio para actividades fraudulentas, maliciosas o ilegales.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">4. Privacidad y Seguridad</h2>
              <p className="mb-4">Nos comprometemos a proteger la privacidad de nuestros usuarios. Las contraseñas generadas por nuestro servicio no se almacenan en nuestros servidores y se generan localmente en su dispositivo. No recopilamos las contraseñas que usted genera.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">5. Limitación de Responsabilidad</h2>
              <p className="mb-4">Nuestro servicio se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas. No garantizamos que nuestro servicio sea ininterrumpido, seguro o libre de errores.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">6. Modificaciones de los Términos</h2>
              <p className="mb-4">Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio. Su uso continuado de nuestro servicio después de la publicación de estas modificaciones constituye su aceptación de los nuevos términos.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">7. Contacto</h2>
              <p className="mb-4">Si tiene alguna pregunta sobre estos términos de uso, póngase en contacto con nosotros a través de nuestra página de contacto.</p>
            </div>
          </>
        );
      default: // English
        return (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center">Terms of Use</h1>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">By using our Fortress Password Generator service, you agree to comply with these terms of use. If you do not agree to these terms, please do not use our service.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">2. Service Description</h2>
              <p className="mb-4">Fortress Password Generator is an online tool that allows users to generate secure and robust passwords. Our service is provided free of charge and aims to improve the security of users' personal and professional information.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">3. Use of Service</h2>
              <p className="mb-4">You agree to use our service only for lawful purposes and in compliance with all applicable laws and regulations. You agree not to use our service for fraudulent, malicious, or illegal activities.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">4. Privacy and Security</h2>
              <p className="mb-4">We are committed to protecting the privacy of our users. Passwords generated by our service are not stored on our servers and are generated locally on your device. We do not collect the passwords you generate.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">5. Limitation of Liability</h2>
              <p className="mb-4">Our service is provided "as is" and "as available," without warranty of any kind, express or implied. We do not guarantee that our service will be uninterrupted, secure, or error-free.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">6. Changes to Terms</h2>
              <p className="mb-4">We reserve the right to modify these terms at any time. Modifications will take effect immediately upon posting on our site. Your continued use of our service after the posting of such modifications constitutes your acceptance of the new terms.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">7. Contact</h2>
              <p className="mb-4">If you have any questions regarding these terms of use, please contact us through our contact page.</p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray dark:bg-fortipass-charcoal">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Navigation language={language} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-sm p-8">
          {getTermsContent()}
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Terms;
