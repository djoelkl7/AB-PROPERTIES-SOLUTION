import { motion } from "motion/react";
import { Play } from "lucide-react";

const videos = [
  {
    id: "vpYYym7rsHM",
    title: "AB Properties Solution Showcase",
    label: "Company Overview"
  },
  {
    id: "q2tTtfPF3vU",
    title: "Project Highlights",
    label: "Development Tour"
  },
  {
    id: "NzuODBk1GHg",
    title: "Modern Architecture",
    label: "Design Showcase"
  },
  {
    id: "8HHcHKZJ744",
    title: "Interior Excellence",
    label: "Interior Tour"
  }
];

const VideoShowcase = () => {
  return (
    <section id="video-tour" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Virtual Experience</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6 tracking-tight">
              Experience Our <span className="text-brand-blue">Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Take a virtual tour through our latest developments and see how we bring architectural visions to life with precision and passion.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video border-4 border-white bg-gray-100">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Decorative Elements for each video */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/5 rounded-full -z-0 blur-2xl"></div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-white px-4 py-3 rounded-2xl shadow-lg z-20 border border-gray-50 flex items-center gap-3">
                <div className="bg-brand-orange p-2 rounded-xl">
                  <Play className="text-white fill-white" size={14} />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-[10px] uppercase tracking-widest">{video.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
