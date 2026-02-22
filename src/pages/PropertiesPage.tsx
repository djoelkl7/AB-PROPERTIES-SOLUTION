import { motion } from "motion/react";
import Properties from "../components/Properties";

const PropertiesPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-brand-blue py-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Our Properties</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Explore our wide range of residential and commercial properties designed for modern living and business excellence.
          </p>
        </motion.div>
      </section>
      <Properties />
      
      {/* Additional Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Can't find what you're looking for?</h2>
              <p className="text-gray-600">Our team can help you find the perfect property that fits your specific requirements.</p>
            </div>
            <button className="bg-brand-orange text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all whitespace-nowrap">
              Contact Our Agents
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
