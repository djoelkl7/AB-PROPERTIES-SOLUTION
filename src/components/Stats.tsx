import { motion } from "motion/react";
import { Users, Briefcase, Award, Heart } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "15+", icon: Briefcase },
  { label: "Completed Projects", value: "250+", icon: Award },
  { label: "Happy Clients", value: "500+", icon: Users },
  { label: "Awards Won", value: "12", icon: Heart },
];

const Stats = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                  <stat.icon className="text-brand-orange" size={32} />
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-blue-100 font-black uppercase tracking-[0.2em] text-[10px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
