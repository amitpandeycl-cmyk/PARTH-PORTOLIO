import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      school: 'Mesa School of Business',
      degree: 'Entrepreneurship Experience',
      date: 'Batch of 2029',
      location: 'Bangalore, India',
      highlight: true
    },
    {
      school: 'IIM Bangalore',
      degree: 'Undergraduate Studies',
      date: 'Graduation: 2028',
      location: 'Bengaluru, India',
      highlight: false
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-emerald-400">Education</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:-translate-y-2 ${
              edu.highlight 
                ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]' 
                : 'bg-slate-900/40 border-white/5 hover:border-white/20'
            }`}
          >
            {edu.highlight && (
              <div className="absolute top-0 right-0 -mt-3 -mr-3 px-4 py-1 bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                Current
              </div>
            )}
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
              edu.highlight ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
            }`}>
              <GraduationCap className="w-7 h-7" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-white mb-2">{edu.school}</h3>
            <p className="text-lg text-emerald-400 font-medium mb-6">{edu.degree}</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{edu.date}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{edu.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
