import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", sectionId: "home" },
    { name: "About", path: "/#about", sectionId: "about" },
    { name: "Virtual Tour", path: "/#video-tour", sectionId: "video-tour" },
    { name: "Services", path: "/services", sectionId: "services" },
    { name: "Properties", path: "/properties", sectionId: "properties" },
    { name: "Contact", path: "/contact", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Navbar height + some padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (location.pathname === "/" && link.sectionId) {
      e.preventDefault();
      scrollToSection(link.sectionId);
      setIsOpen(false);
    } else if (link.path.startsWith("/#") && location.pathname !== "/") {
      // If we are on another page and clicking a hash link
      // Let the default Link behavior take us to "/" and then we can scroll
      // But we need to handle the scroll after navigation
    }
  };

  // Handle scroll after navigation if hash is present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl py-4 shadow-sm border-b border-gray-100" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3 group"
          >
            <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-50 group-hover:scale-110 transition-transform">
              <img 
                src="https://files.oaiusercontent.com/file-m7O0zN1r2p3q4..." 
                alt="AB Properties Logo" 
                className="h-10 w-auto"
                onError={(e) => (e.target as HTMLImageElement).src = "https://picsum.photos/seed/logo/50/50"}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tight leading-none transition-colors ${scrolled ? "text-brand-blue" : "text-white"}`}>
                AB PROPERTIES
              </span>
              <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-brand-orange" : "text-white/80"}`}>
                Solution
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-brand-orange relative group ${
                  location.pathname === link.path 
                    ? scrolled ? "text-brand-blue" : "text-white" 
                    : scrolled ? "text-gray-500" : "text-white/70"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  scrollToSection("contact");
                }
              }}
              className="bg-brand-blue text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block px-4 py-4 rounded-2xl text-sm font-black uppercase tracking-widest ${
                    location.pathname === link.path
                      ? "bg-blue-50 text-brand-blue"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    scrollToSection("contact");
                    setIsOpen(false);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="block w-full text-center bg-brand-blue text-white px-4 py-5 rounded-2xl font-black text-sm uppercase tracking-widest mt-6"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
