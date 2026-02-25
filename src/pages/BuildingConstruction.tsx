import { motion } from "motion/react";
import { HardHat, Ruler, Hammer, Award } from "lucide-react";
import CTABanner from "../components/CTABanner";

const BuildingConstruction = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920" 
            alt="Building and Construction" 
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
              Structural Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Building & <span className="text-brand-orange">Construction</span>
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto font-medium">
              World-class construction services delivering structural excellence and architectural beauty.
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
              className="order-2 lg:order-1 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Site" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">
                Engineering <span className="text-brand-blue">Mastery</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From residential homes to large-scale commercial complexes, AB PROPERTIES SOLUTION brings engineering mastery to every project. Our construction team is composed of seasoned professionals who prioritize safety, quality, and precision. We use the latest technology and high-grade materials to ensure every build stands the test of time.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Ruler, text: "Precision planning and surveying" },
                  { icon: Hammer, text: "High-quality craftsmanship" },
                  { icon: HardHat, text: "Strict safety protocols" },
                  { icon: Award, text: "Certified engineering standards" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-orange-50 p-2 rounded-lg">
                      <item.icon className="text-brand-orange" size={20} />
                    </div>
                    <span className="text-gray-800 font-bold">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Specializations Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Our Specializations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Builds",
                desc: "Custom homes designed for modern living, focusing on comfort and aesthetic appeal."
              },
              {
                title: "Commercial Projects",
                desc: "State-of-the-art office spaces and retail centers built for functionality and growth."
              },
              {
                title: "Renovations",
                desc: "Transforming existing structures into modern spaces with high-end finishes."
              }
            ].map((spec, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{spec.title}</h3>
                <p className="text-gray-600 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default BuildingConstruction;
