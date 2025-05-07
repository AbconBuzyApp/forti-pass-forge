
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { getTranslation } from "@/utils/i18n";
import { Language } from "@/types";

const CookieConsent = ({ language }: { language: Language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (cookieConsent === null) {
      // If no choice has been made yet, show the banner
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-gray-200 md:flex md:items-center md:justify-between">
      <div className="flex items-center space-x-3">
        <div className="hidden md:block">
          <Cookie className="h-8 w-8 text-fortipass-purple" />
        </div>
        <div className="pr-4 md:pr-8">
          <p className="text-sm font-medium">
            {language === "fr"
              ? "Nous utilisons des cookies pour optimiser votre expérience de navigation sur ce site."
              : language === "es"
              ? "Utilizamos cookies para optimizar su experiencia de navegación en este sitio."
              : "We use cookies to optimize your browsing experience on this site."}
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex space-x-3">
        <Button
          variant="outline"
          size="sm"
          onClick={declineCookies}
          className="border-gray-300 hover:bg-gray-100"
        >
          {language === "fr"
            ? "Refuser"
            : language === "es"
            ? "Rechazar"
            : "Decline"}
        </Button>
        <Button
          size="sm"
          onClick={acceptCookies}
          className="bg-fortipass-purple hover:bg-fortipass-dark-purple"
        >
          {language === "fr"
            ? "Accepter"
            : language === "es"
            ? "Aceptar"
            : "Accept"}
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
