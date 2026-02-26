import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Filter, Search, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const propertiesData = [
  {
    id: 1,
    title: "Luxury Villa Estate",
    category: "Real Estate Sales",
    type: "Residential",
    price: 1250000,
    bedrooms: 5,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Modern Office Complex",
    category: "Property Development",
    type: "Commercial",
    price: 4500000,
    bedrooms: 0,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Urban Apartment Block",
    category: "Building & Construction",
    type: "Residential",
    price: 850000,
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Commercial Plaza",
    category: "Property Management",
    type: "Commercial",
    price: 2100000,
    bedrooms: 0,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Residential Heights",
    category: "Real Estate Sales",
    type: "Residential",
    price: 650000,
    bedrooms: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Industrial Warehouse",
    category: "Building & Construction",
    type: "Commercial",
    price: 1500000,
    bedrooms: 0,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    title: "Seaside Penthouse",
    category: "Real Estate Sales",
    type: "Residential",
    price: 2800000,
    bedrooms: 4,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    title: "Tech Hub Office",
    category: "Property Development",
    type: "Commercial",
    price: 3200000,
    bedrooms: 0,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
  }
];

const Properties = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterBedrooms, setFilterBedrooms] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((item) => {
      const matchesType = filterType === "All" || item.type === filterType;
      const matchesBedrooms = filterBedrooms === "All" || 
        (filterBedrooms === "4+" ? item.bedrooms >= 4 : item.bedrooms === parseInt(filterBedrooms));
      
      let matchesPrice = true;
      if (filterPrice !== "All") {
        const [min, max] = filterPrice.split("-").map(Number);
        if (max) {
          matchesPrice = item.price >= min && item.price <= max;
        } else {
          matchesPrice = item.price >= min;
        }
      }

      return matchesType && matchesBedrooms && matchesPrice;
    });
  }, [filterType, filterBedrooms, filterPrice]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="properties" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 tracking-tight">
              Featured <span className="text-brand-blue">Properties</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all border ${
                showFilters ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Filter size={20} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <Link to="/properties" className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hidden sm:block">
              View All
            </Link>
          </div>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Property Type</label>
                  <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="All">All Types</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Bedrooms</label>
                  <select 
                    value={filterBedrooms}
                    onChange={(e) => setFilterBedrooms(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="All">Any Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Price Range</label>
                  <select 
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="All">Any Price</option>
                    <option value="0-1000000">Under $1M</option>
                    <option value="1000000-2000000">$1M - $2M</option>
                    <option value="2000000-3000000">$2M - $3M</option>
                    <option value="3000000">$3M+</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center px-4">
                <p className="text-sm font-bold text-gray-500">
                  Showing <span className="text-brand-blue">{filteredProperties.length}</span> properties found
                </p>
                <button 
                  onClick={() => {
                    setFilterType("All");
                    setFilterBedrooms("All");
                    setFilterPrice("All");
                  }}
                  className="text-xs font-black uppercase tracking-widest text-brand-orange hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="text-white">
                    <div className="flex gap-2 mb-4">
                      <span className="bg-brand-orange text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-2xl font-black text-brand-orange mb-4">{formatPrice(project.price)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/80 text-sm font-bold">
                        <span>Explore Project</span>
                        <ExternalLink size={18} />
                      </div>
                      {project.bedrooms > 0 && (
                        <span className="text-xs font-bold text-white/60">{project.bedrooms} Beds</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProperties.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Properties;
