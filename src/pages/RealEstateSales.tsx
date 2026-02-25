import { motion } from "motion/react";
import { CheckCircle2, Home, MapPin, DollarSign, ShieldCheck } from "lucide-react";
import CTABanner from "../components/CTABanner";

const RealEstateSales = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920" 
            alt="Real Estate Sales" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              Premium Listings
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Real Estate <span className="text-brand-orange">Sales</span>
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto font-medium">
              Expert guidance for buying and selling premium properties in prime locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">
                Find Your <span className="text-brand-blue">Perfect Property</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At AB PROPERTIES SOLUTION, we understand that buying or selling a property is one of the most significant decisions in your life. Our dedicated team of real estate experts provides personalized service, market insights, and a curated portfolio of premium properties to ensure a seamless experience.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Prime locations across the region" },
                  { icon: DollarSign, text: "Competitive market pricing" },
                  { icon: ShieldCheck, text: "Verified property documentation" },
                  { icon: Home, text: "Diverse portfolio: Residential & Commercial" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <item.icon className="text-brand-blue" size={20} />
                    </div>
                    <span className="text-gray-800 font-bold">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Home" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Analysis",
                desc: "We provide in-depth market reports to help you make informed investment decisions."
              },
              {
                title: "Legal Assistance",
                desc: "Our legal team ensures all transactions are transparent and comply with local regulations."
              },
              {
                title: "After-Sales Support",
                desc: "We don't just stop at the sale; we provide ongoing support for all your property needs."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default RealEstateSales;
