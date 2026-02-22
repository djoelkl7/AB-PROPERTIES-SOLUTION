import { motion } from "motion/react";
import { Home, Building2, LayoutDashboard, HardHat } from "lucide-react";

const services = [
  {
    title: "Real Estate Sales",
    description: "Expert guidance for buying and selling premium properties in prime locations.",
    icon: Home,
    color: "bg-blue-50",
    iconColor: "text-brand-blue"
  },
  {
    title: "Property Development",
    description: "Innovative development solutions that transform landscapes into communities.",
    icon: Building2,
    color: "bg-orange-50",
    iconColor: "text-brand-orange"
  },
  {
    title: "Property Management",
    description: "Hassle-free management services ensuring your assets are well-maintained.",
    icon: LayoutDashboard,
    color: "bg-blue-50",
    iconColor: "text-brand-blue"
  },
  {
    title: "Building & Construction",
    description: "World-class construction services delivering structural excellence and beauty.",
    icon: HardHat,
    color: "bg-orange-50",
    iconColor: "text-brand-orange"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6 tracking-tight">
              Modern <span className="text-brand-blue">Property Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine traditional craftsmanship with modern technology to deliver superior results across all our service areas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all border border-gray-50 group"
            >
              <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={service.iconColor} size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-brand-blue font-bold cursor-pointer group-hover:text-brand-orange transition-colors">
                <span className="text-sm uppercase tracking-widest">Explore Service</span>
                <div className="h-0.5 w-6 bg-brand-blue group-hover:w-12 group-hover:bg-brand-orange transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
