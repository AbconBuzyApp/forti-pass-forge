
import { Language } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ContactProps {
  language: Language;
}

const Contact = ({ language }: ContactProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:abconapp@gmail.com?subject=Contact from SecuPasswordGen&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-fortipass-charcoal">
        {language === "fr" ? "Nous contacter" : "Contact Us"}
      </h1>
      
      <div className="space-y-6">
        <p className="text-gray-700">
          Si vous avez des questions, des suggestions ou des préoccupations concernant SecuPasswordGen,
          n'hésitez pas à nous contacter.
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
              Message
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
            {language === "fr" ? "Envoyer" : "Send"}
          </Button>
        </form>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Email de contact :</h2>
          <a href="mailto:abconapp@gmail.com" className="text-fortipass-purple hover:underline">
            abconapp@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
