
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-end py-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-gray-700 hover:text-fortipass-purple">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-fortipass-purple">About</Link>
                <Link to="/blog" className="text-gray-700 hover:text-fortipass-purple">Blog</Link>
                <Link to="/privacy" className="text-gray-700 hover:text-fortipass-purple">Privacy</Link>
                <Link to="/legal" className="text-gray-700 hover:text-fortipass-purple">Legal</Link>
                <Link to="/contact" className="text-gray-700 hover:text-fortipass-purple">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex justify-center space-x-6 py-4">
          <Link to="/" className="text-gray-700 hover:text-fortipass-purple">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-fortipass-purple">About</Link>
          <Link to="/blog" className="text-gray-700 hover:text-fortipass-purple">Blog</Link>
          <Link to="/privacy" className="text-gray-700 hover:text-fortipass-purple">Privacy</Link>
          <Link to="/legal" className="text-gray-700 hover:text-fortipass-purple">Legal</Link>
          <Link to="/contact" className="text-gray-700 hover:text-fortipass-purple">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
