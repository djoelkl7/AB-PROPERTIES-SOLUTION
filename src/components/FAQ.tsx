import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical construction project take?",
    answer: "Project timelines vary depending on scope. A residential home typically takes 6-12 months, while commercial projects can range from 12-24 months. We provide detailed schedules during the planning phase."
  },
  {
    question: "Do you offer financing options for property purchases?",
    answer: "Yes, we partner with several leading financial institutions to provide flexible mortgage and financing options for our clients. Our team can guide you through the application process."
  },
  {
    question: "Are your properties covered by warranty?",
    answer: "Absolutely. All our new constructions come with a comprehensive structural warranty and a dedicated after-sales service period to ensure your peace of mind."
  },
  {
    question: "Can I customize the design of my property during construction?",
    answer: "Yes, we offer customization options for off-plan properties. You can choose finishes, layouts, and certain architectural details depending on the stage of construction."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Common Questions</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">Frequently Asked <span className="text-brand-blue">Questions</span></h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
