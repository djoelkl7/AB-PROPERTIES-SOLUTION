import { motion } from "motion/react";
import { Building2, Users, Lightbulb, TrendingUp } from "lucide-react";
import CTABanner from "../components/CTABanner";

const PropertyDevelopment = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Property Development" 
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
              Visionary Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Property <span className="text-brand-orange">Development</span>
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto font-medium">
              Innovative development solutions that transform landscapes into vibrant communities.
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
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000" 
                alt="Development Site" 
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
                Shaping the <span className="text-brand-blue">Future</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Property development is at the heart of what we do. AB PROPERTIES SOLUTION specializes in identifying high-potential areas and transforming them into sustainable, modern residential and commercial hubs. Our approach integrates environmental consciousness with architectural innovation.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Lightbulb, text: "Innovative architectural designs" },
                  { icon: Users, text: "Community-focused planning" },
                  { icon: TrendingUp, text: "High ROI for investors" },
                  { icon: Building2, text: "Sustainable building practices" }
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

          {/* Process Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Our Development Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Acquisition", desc: "Strategic land sourcing and feasibility studies." },
              { step: "02", title: "Design", desc: "Collaborating with top architects for modern concepts." },
              { step: "03", title: "Execution", desc: "Precision construction with strict quality control." },
              { step: "04", title: "Delivery", desc: "Handing over world-class spaces to our clients." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <span className="text-5xl font-black text-brand-blue/10 absolute top-4 right-4">{item.step}</span>
                <h3 className="text-xl font-black text-gray-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default PropertyDevelopment;
