import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 min-h-[90vh]">
      
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-600">
              Parth Agarwal
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
            Founder, Marketing Enthusiast, and Tech Explorer based in Bengaluru. 
            I specialize in onboarding high-ticket clients, driving viral growth, and building quality-first brands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Start a project <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View my work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full max-w-md md:max-w-lg relative mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
        >
          {/* Layered glowing borders */}
          <div className="absolute inset-0 rounded-3xl border border-white/20 z-20 transition-all duration-500 group-hover:border-emerald-500/50"></div>
          <div className="absolute inset-4 rounded-2xl border border-white/10 z-20"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-emerald-500/10 z-10 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          <img
            src="https://i.postimg.cc/FHKLrs2g/IMG-8912.jpg"
            alt="Parth Agarwal"
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
        
        {/* Floating decorative elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl z-30"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span className="text-emerald-400 font-bold text-xl">100M</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Views Generated</p>
              <p className="text-slate-400 text-xs">In just 1 month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
