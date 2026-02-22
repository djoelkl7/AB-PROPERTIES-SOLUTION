import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
              <img
                src="https://files.oaiusercontent.com/file-S4K5v6p7m8n9..."
                alt="AB Properties Solution CEO"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full -z-0 blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-blue/10 rounded-full -z-0 blur-3xl"></div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden sm:block border border-gray-50"
            >
              <p className="text-5xl font-black text-brand-blue mb-1">15+</p>
              <p className="text-xs uppercase tracking-widest font-black text-gray-400">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Our Visionary Leadership</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Building Trust Through <span className="text-brand-blue">Quality & Integrity</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Under the leadership of our CEO, AB PROPERTIES SOLUTION has transformed from a local construction firm into a premier real estate powerhouse. Our philosophy is simple: we don't just build structures; we build legacies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Reliable Service", desc: "Consistency in every brick laid." },
                { title: "Expert Craft", desc: "Mastery in modern architecture." },
                { title: "Transparent", desc: "Honest pricing and timelines." },
                { title: "Client First", desc: "Your dream is our blueprint." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-50 p-2 rounded-xl mt-1">
                    <CheckCircle2 className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                Our Full Story
              </button>
              <div className="flex flex-col">
                <span className="font-black text-gray-900">CEO, AB Properties</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Executive Director</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
