
import { Language } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

interface ContactProps {
  language: Language;
}

const Contact = ({ language: initialLanguage }: ContactProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:abconapp@gmail.com?subject=Contact from Fortress Password Generator&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Navigation language={language} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-fortipass-charcoal">
          {language === "fr" ? "Nous contacter" : 
           language === "es" ? "Contáctenos" : 
           "Contact Us"}
        </h1>
        
        <div className="space-y-6">
          <p className="text-gray-700">
            {language === "fr" 
              ? "Si vous avez des questions, des suggestions ou des préoccupations concernant Fortress Password Generator, n'hésitez pas à nous contacter."
              : language === "es"
              ? "Si tiene alguna pregunta, sugerencia o inquietud sobre Fortress Password Generator, no dude en ponerse en contacto con nosotros."
              : "If you have any questions, suggestions, or concerns about Fortress Password Generator, please don't hesitate to contact us."}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {language === "fr" ? "Message" : language === "es" ? "Mensaje" : "Message"}
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="h-32"
              />
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              {language === "fr" ? "Envoyer" : language === "es" ? "Enviar" : "Send"}
            </Button>
          </form>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">
              {language === "fr" ? "Email de contact :" : 
               language === "es" ? "Email de contacto:" : 
               "Contact email:"}
            </h2>
            <a href="mailto:abconapp@gmail.com" className="text-fortipass-purple hover:underline">
              abconapp@gmail.com
            </a>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Contact;
