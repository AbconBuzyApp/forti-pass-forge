import { useState } from "react";
import { Language } from "@/types";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex flex-col min-h-screen bg-fortipass-soft-gray">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 py-4">
            <Link to="/" className="text-gray-700 hover:text-fortipass-purple">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-fortipass-purple">About</Link>
            <Link to="/privacy" className="text-gray-700 hover:text-fortipass-purple">Privacy</Link>
            <Link to="/legal" className="text-gray-700 hover:text-fortipass-purple">Legal</Link>
            <Link to="/contact" className="text-gray-700 hover:text-fortipass-purple">Contact</Link>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Welcome to Fortress Password Generator
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Fortress Password Generator is a secure and fast online tool for generating robust passwords,
              allowing our users to protect their personal and professional information.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Secure Generation</h3>
                <p>Use our generator to create random or personalized passwords.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Maximum Security</h3>
                <p>Our generators respect the strictest security standards.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p>Create passwords in seconds with customization options.</p>
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
