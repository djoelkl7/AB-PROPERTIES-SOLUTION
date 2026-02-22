import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Homeowner",
    content: "AB Properties Solution exceeded my expectations. Their attention to detail in the construction of my new home was remarkable. Truly professional!",
    image: "https://i.pravatar.cc/150?u=john",
  },
  {
    name: "Sarah Williams",
    role: "Property Investor",
    content: "I've worked with many developers, but AB Properties stands out for their transparency and quality. Their property management services are top-notch.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "The office complex they developed for us is a masterpiece. Modern, functional, and delivered on time. Highly recommended for commercial projects.",
    image: "https://i.pravatar.cc/150?u=michael",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              What Our <span className="text-brand-blue">Clients Say</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm relative border border-gray-100"
            >
              <div className="absolute -top-5 left-10 bg-brand-orange p-3 rounded-2xl shadow-lg">
                <Quote className="text-white" size={24} />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-blue/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-brand-blue text-sm font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
