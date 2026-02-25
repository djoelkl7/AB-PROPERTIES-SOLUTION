import { motion } from "motion/react";
import { LayoutDashboard, Shield, Clock, BarChart3 } from "lucide-react";
import CTABanner from "../components/CTABanner";

const PropertyManagement = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=1920" 
            alt="Property Management" 
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
              Asset Protection
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Property <span className="text-brand-orange">Management</span>
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto font-medium">
              Hassle-free management services ensuring your assets are well-maintained and profitable.
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
                Your Assets, <span className="text-brand-blue">Our Priority</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Managing a property can be demanding. AB PROPERTIES SOLUTION offers comprehensive management services designed to take the stress out of property ownership. From tenant screening and rent collection to maintenance and financial reporting, we handle it all with professionalism and care.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Rigorous tenant screening process" },
                  { icon: Clock, text: "24/7 maintenance and emergency support" },
                  { icon: BarChart3, text: "Detailed financial reporting & ROI tracking" },
                  { icon: LayoutDashboard, text: "User-friendly owner dashboard" }
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
                alt="Management Services" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tenant Relations",
                desc: "We handle all tenant communications, ensuring high retention rates and satisfied occupants."
              },
              {
                title: "Maintenance",
                desc: "Regular inspections and prompt repairs keep your property in top condition and preserve its value."
              },
              {
                title: "Financial Clarity",
                desc: "Transparent accounting and regular statements provide you with a clear view of your investment's performance."
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default PropertyManagement;
