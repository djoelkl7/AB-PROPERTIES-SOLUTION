import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-50">
                <img 
                  src="https://files.oaiusercontent.com/file-m7O0zN1r2p3q4..." 
                  alt="Logo" 
                  className="h-10 w-auto"
                  onError={(e) => (e.target as HTMLImageElement).src = "https://picsum.photos/seed/logo/50/50"}
                />
              </div>
              <span className="font-black text-xl tracking-tight text-brand-blue">AB PROPERTIES</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              Building your future, one property at a time. We are committed to excellence in real estate and construction through innovation and trust.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              {["Home", "About Us", "Our Services", "Featured Projects", "Contact Us"].map((link, i) => (
                <li key={i}>
                  <Link to={link === "Home" ? "/" : `/${link.toLowerCase().split(" ")[0]}`} className="hover:text-brand-blue transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              {["Real Estate Sales", "Property Development", "Property Management", "Building & Construction"].map((service, i) => (
                <li key={i}>
                  <Link to="/services" className="hover:text-brand-blue transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Get the latest property insights and market updates.</p>
            <div className="flex gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-100">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-4 py-2 w-full focus:outline-none text-sm"
              />
              <button className="bg-brand-blue text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-medium">
            © {new Date().getFullYear()} AB PROPERTIES SOLUTION. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brand-blue transition-colors"
          >
            Back to Top
            <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
