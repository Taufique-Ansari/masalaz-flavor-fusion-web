import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-saffron/20">
      {/* Top bar with phone number - hide on small screens */}
      <div className="bg-charcoal text-cream py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">078209 82492</span>
            <span className="md:hidden">Call Us</span>
          </div>
          <div className="hidden lg:block">
            Open Daily: 11:30 AM - 10:00 PM
          </div>
          <div className="lg:hidden">
            Open Daily
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-inter font-bold text-charcoal">
              Masalaz <span className="text-paprika">One</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-charcoal hover:text-paprika transition-all duration-300 font-open-sans font-medium text-sm xl:text-base relative group ${
                  activeSection === item.href.substring(1) ? "text-paprika" : ""
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-paprika transition-all duration-300 group-hover:w-full ${
                  activeSection === item.href.substring(1) ? "w-full" : ""
                }`} />
              </a>
            ))}
            <Button className="bg-paprika hover:bg-paprika/90 text-cream font-open-sans text-sm xl:text-base px-4 xl:px-6 transition-all duration-300 hover:scale-105">
              Book Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5 md:w-6 md:h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-saffron/20 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-3 md:space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-charcoal hover:text-paprika transition-all duration-300 font-open-sans font-medium text-base md:text-lg py-2 relative group ${
                    activeSection === item.href.substring(1) ? "text-paprika" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-paprika transition-all duration-300 group-hover:w-full ${
                    activeSection === item.href.substring(1) ? "w-full" : ""
                  }`} />
                </a>
              ))}
              <Button className="bg-paprika hover:bg-paprika/90 text-cream font-open-sans w-full py-3 text-base md:text-lg transition-all duration-300 hover:scale-105">
                Book Table
              </Button>
              {/* Mobile phone number */}
              <div className="sm:hidden pt-2 border-t border-saffron/20 mt-4">
                <div className="flex items-center gap-2 text-charcoal">
                  <Phone className="w-4 h-4" />
                  <span className="font-open-sans text-sm">078209 82492</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
