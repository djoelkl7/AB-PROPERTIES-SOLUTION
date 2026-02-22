import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
              Let's Discuss Your <br />
              <span className="text-brand-blue">Next Project</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone className="text-brand-blue group-hover:text-white" size={28} />
                </div>
                <div>
                  <p className="text-gray-500 font-semibold uppercase tracking-wider text-xs mb-1">Call Us Anytime</p>
                  <p className="text-xl font-bold text-gray-900">0803 591 1163</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-orange-50 p-4 rounded-2xl group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Mail className="text-brand-orange group-hover:text-white" size={28} />
                </div>
                <div>
                  <p className="text-gray-500 font-semibold uppercase tracking-wider text-xs mb-1">Email Address</p>
                  <p className="text-xl font-bold text-gray-900">akinbush@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <MapPin className="text-brand-blue group-hover:text-white" size={28} />
                </div>
                <div>
                  <p className="text-gray-500 font-semibold uppercase tracking-wider text-xs mb-1">Our Location</p>
                  <p className="text-xl font-bold text-gray-900">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-4">Follow Our Progress</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5 }}
                    href="#"
                    className="bg-gray-100 p-3 rounded-xl text-gray-600 hover:bg-brand-orange hover:text-white transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all">
                  <option>Real Estate Sales</option>
                  <option>Property Development</option>
                  <option>Construction Services</option>
                  <option>Property Management</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
