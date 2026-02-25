import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafafa]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0056b3 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full mb-12 mt-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              Trusted Real Estate Partner
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 text-gray-900 tracking-tight">
            Building Your Future, <br />
            <span className="text-brand-blue">One Property</span> <br />
            <span className="text-brand-orange">at a Time</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
            Professional real estate development and property solutions. We turn your architectural dreams into reality with precision and trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/properties"
                className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                View Properties <ArrowRight size={22} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="bg-white text-gray-900 border border-gray-200 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
            <div className="flex items-center gap-2">
              <span className="font-black text-2xl">15+</span>
              <span className="text-xs font-bold uppercase tracking-widest leading-tight">Years<br/>Experience</span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <span className="font-black text-2xl">500+</span>
              <span className="text-xs font-bold uppercase tracking-widest leading-tight">Happy<br/>Clients</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
              alt="Modern Architecture"
              className="w-full h-[600px] object-cover"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-50 z-20 max-w-xs"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-brand-orange/10 p-3 rounded-2xl">
                <img 
                  src="https://files.oaiusercontent.com/file-m7O0zN1r2p3q4..." 
                  alt="Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <p className="font-black text-gray-900">AB Properties</p>
                <p className="text-gray-500 text-xs">Quality Guaranteed</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              "The best construction partner we've ever worked with. Highly professional."
            </p>
          </motion.div>

          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
