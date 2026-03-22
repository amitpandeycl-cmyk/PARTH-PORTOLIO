import { motion } from 'motion/react';
import { Code2, Lightbulb, Terminal, Database, Layout, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'HTML & CSS', icon: <Layout className="w-5 h-5" /> },
    { name: 'Java', icon: <Terminal className="w-5 h-5" /> },
    { name: 'AI Studio', icon: <Cpu className="w-5 h-5" /> },
    { name: 'n8n', icon: <Code2 className="w-5 h-5" /> },
    { name: 'Antigravity', icon: <Lightbulb className="w-5 h-5" /> },
    { name: 'Supabase', icon: <Database className="w-5 h-5" /> },
  ];

  const interests = ['Cricket', 'Magic', 'Gaming', 'Acting'];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 text-center md:text-left"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-emerald-400">Me</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
          I'm a passionate builder bridging the gap between technology and marketing. 
          I thrive on creating systems, scaling brands, and exploring cutting-edge tools to deliver exceptional results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Code2 className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">Technical Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all flex flex-col items-center justify-center text-center gap-3 group"
              >
                <div className="text-slate-400 group-hover:text-emerald-400 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests & Languages */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                <Terminal className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">Languages</h3>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 text-white font-medium shadow-lg">
                English <span className="text-emerald-400 text-sm ml-2">Fluent</span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Lightbulb className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">Beyond the Screen</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span 
                  key={interest} 
                  className="px-5 py-2.5 rounded-full bg-slate-900/80 text-sm font-medium text-slate-300 border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
