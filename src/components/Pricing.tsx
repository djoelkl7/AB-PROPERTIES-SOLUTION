import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Consultation",
    price: "Free",
    description: "Initial project assessment and site visit.",
    features: [
      "Site evaluation",
      "Budget estimation",
      "Initial design concept",
      "Project feasibility study"
    ],
    cta: "Book Now",
    highlight: false
  },
  {
    name: "Project Management",
    price: "Custom",
    description: "Full oversight of your construction project.",
    features: [
      "Contractor supervision",
      "Quality control",
      "Timeline management",
      "Material procurement",
      "Regular progress reports"
    ],
    cta: "Get a Quote",
    highlight: true
  },
  {
    name: "Full Development",
    price: "Custom",
    description: "End-to-end real estate development solutions.",
    features: [
      "Architectural design",
      "Legal documentation",
      "Construction & finishing",
      "Marketing & sales",
      "Post-construction support"
    ],
    cta: "Start Project",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Packages</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Flexible <span className="text-brand-blue">Service Plans</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the right level of support for your property journey. We offer tailored solutions for every project scale.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white p-10 rounded-[2rem] shadow-sm border ${plan.highlight ? 'border-brand-blue ring-4 ring-brand-blue/5' : 'border-gray-100'} flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-brand-blue">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-500 text-sm">/ project</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-blue-50 p-1 rounded-full">
                      <Check className="text-brand-blue" size={16} />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                  plan.highlight 
                    ? 'bg-brand-blue text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
