import { motion } from "motion/react";
import Properties from "../components/Properties";
import { Search, MapPin, Home as HomeIcon } from "lucide-react";

const PropertiesPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section for Properties */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-brand-blue/60 to-brand-blue"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white"
        >
          <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-4 block">Exclusive Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Find Your <span className="text-brand-orange">Dream</span> Space</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            From luxury residential villas to high-performance commercial complexes, explore our curated selection of premier properties.
          </p>
        </motion.div>
      </section>

      {/* Quick Stats / Info Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-4 rounded-2xl text-brand-blue">
              <HomeIcon size={24} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">Total Listings</p>
              <p className="text-xl font-black text-gray-900">150+ Properties</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0 md:px-8">
            <div className="bg-orange-50 p-4 rounded-2xl text-brand-orange">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">Locations</p>
              <p className="text-xl font-black text-gray-900">Global Presence</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-50 p-4 rounded-2xl text-green-600">
              <Search size={24} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">Verified</p>
              <p className="text-xl font-black text-gray-900">100% Secure</p>
            </div>
          </div>
        </div>
      </div>

      <Properties />
      
      {/* Call to Action Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-blue-900/20 relative overflow-hidden text-center md:text-left">
             {/* Decorative background elements */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Can't find what you're looking for?</h2>
                <p className="text-blue-100 text-lg font-medium leading-relaxed">
                  Our dedicated team of property experts is ready to help you find the perfect match for your lifestyle or business needs. Let's build your future together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20">
                  Contact Our Agents
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
                  Browse Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
