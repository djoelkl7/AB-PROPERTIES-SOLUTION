import { motion } from "motion/react";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-brand-blue py-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Have a question or ready to start your next project? We're here to help.
          </p>
        </motion.div>
      </section>
      <Contact />
      
      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
          alt="Map Placeholder" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center">
            <h3 className="font-bold text-gray-900 mb-2">Our Office</h3>
            <p className="text-gray-600">Lagos, Nigeria</p>
            <p className="text-brand-blue font-bold mt-2">Get Directions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
