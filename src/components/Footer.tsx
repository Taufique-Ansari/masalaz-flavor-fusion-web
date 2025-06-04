import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-inter font-bold mb-6">
              Masalaz <span className="text-saffron">One</span>
            </h3>
            <p className="font-open-sans text-cream/80 mb-6 leading-relaxed">
              Experience authentic Indian flavors with a modern twist. Every dish tells a story of heritage, passion, and culinary excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center hover:bg-saffron/80 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-charcoal" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-paprika rounded-full flex items-center justify-center hover:bg-paprika/80 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-cream" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 font-open-sans">
              <li>
                <a href="#home" className="text-cream/80 hover:text-saffron transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-cream/80 hover:text-saffron transition-colors duration-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream/80 hover:text-saffron transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-cream/80 hover:text-saffron transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream/80 hover:text-saffron transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 font-open-sans">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-saffron" />
                <span className="text-cream/80">078209 82492</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-saffron" />
                <span className="text-cream/80">info@masalazonerestaurant.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron mt-1" />
                <span className="text-cream/80">
                  Trambakeshwar Rd, opp. Papayas Chowk,<br />
                  Khode Park, Satpur Colony, Nashik,<br />
                  Maharashtra 422007
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-12 pt-8 border-t border-cream/20 text-center">
          <div className="mb-6">
            <h4 className="text-lg font-inter font-semibold mb-2">Hours of Operation</h4>
            <p className="font-open-sans text-cream/80">
              Monday - Sunday: 11:30 AM - 10:00 PM
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-open-sans text-cream/60 text-sm">
              © 2024 Masalaz One Restaurant. All rights reserved.
            </p>
            <div className="flex gap-6 font-open-sans text-cream/60 text-sm">
              <a href="#" className="hover:text-saffron transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-saffron transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
