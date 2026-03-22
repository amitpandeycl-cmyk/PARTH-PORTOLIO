import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin, Youtube, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-slate-900 to-[#030712] rounded-[3rem] p-8 md:p-16 lg:p-20 border border-white/10 relative overflow-hidden shadow-2xl"
      >
        {/* Decorative background layers */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                something great?
              </span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg max-w-md leading-relaxed">
              I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-8">
              <motion.a 
                whileHover={{ x: 10 }}
                href="mailto:team@retency.in" 
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-white/5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Drop me an email</p>
                  <p className="text-white font-medium text-lg group-hover:text-emerald-400 transition-colors">
                    team@retency.in
                  </p>
                </div>
              </motion.a>
              
              <motion.a 
                whileHover={{ x: 10 }}
                href="tel:+919880453875" 
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-white/5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Call me</p>
                  <p className="text-white font-medium text-lg group-hover:text-emerald-400 transition-colors">
                    +91 9880453875
                  </p>
                </div>
              </motion.a>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-white/5">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Location</p>
                  <p className="text-white font-medium text-lg">
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#030712]/50 p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-md shadow-2xl">
            <h3 className="font-display text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <p className="text-slate-400 mb-8 leading-relaxed">
              Connect with me on LinkedIn to stay in touch, see my latest updates, and explore potential collaborations.
            </p>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://linkedin.com/in/parth-agarwal-3641122b7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-lg transition-colors shadow-lg shadow-blue-900/20 mb-4"
            >
              <Linkedin className="w-6 h-6" />
              Connect on LinkedIn
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.youtube.com/@standoutbharat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold text-lg transition-colors shadow-lg shadow-red-900/20"
            >
              <Youtube className="w-6 h-6" />
              Standout Bharat
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-20 text-center flex flex-col items-center justify-center">
        <a href="#home" className="text-2xl font-display font-bold text-white tracking-tighter flex items-center gap-1 mb-6 opacity-50 hover:opacity-100 transition-opacity">
          PARTH <span className="text-emerald-500">AGARWAL</span>
        </a>
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Parth Agarwal. All rights reserved.
        </p>
      </div>
    </section>
  );
}
