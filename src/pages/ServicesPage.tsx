import { motion } from "motion/react";
import Services from "../components/Services";
import { CheckCircle2 } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-brand-blue py-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Professional real estate and construction services tailored to your needs.
          </p>
        </motion.div>
      </section>
      
      <Services />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Our Services Stand Out</h2>
              <div className="space-y-6">
                {[
                  { title: "Expert Team", desc: "Our professionals have decades of experience in construction and real estate." },
                  { title: "Quality Materials", desc: "We use only the finest materials to ensure longevity and aesthetic appeal." },
                  { title: "On-Time Delivery", desc: "We respect your timelines and strive to deliver every project on schedule." },
                  { title: "Client-Centric", desc: "Your vision is our priority. We work closely with you at every step." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-orange-100 p-2 rounded-lg h-fit">
                      <CheckCircle2 className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
                alt="Construction Planning" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
