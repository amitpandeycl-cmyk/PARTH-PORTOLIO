import { motion } from 'motion/react';
import { Briefcase, ArrowUpRight } from 'lucide-react';

export default function Work() {
  const workExperience = [
    {
      company: 'RETENCY',
      role: 'Co-Founder',
      date: 'August 2025 – Present',
      location: 'Bengaluru, India',
      description: 'Leading a high-growth agency focused on viral marketing and guaranteed ROI.',
      points: [
        'Onboarding high ticket clients and managing relationships.',
        'Cracked PR market with viral formats, achieving 98% satisfactory client results.',
        'Generated 100 MILLION views in 1 month, ensuring guaranteed ROI for clients.',
        'Scaled to 8 LAKH revenue in just 2 months.',
        'Successfully cracked the faceless YouTube niche.'
      ]
    },
    {
      company: 'PARV ESSENTIAL',
      role: 'Founder',
      date: 'Previous Venture',
      location: 'Bengaluru, India',
      description: 'Built a quality-first men\'s essential jewelry brand from the ground up.',
      points: [
        'Specialized in men\'s essential jewelry.',
        'Achieved 1 LAKH in sales within the first 2 months.',
        'Focused on building a quality-first brand identity.',
        'Managed operations and realized the critical importance of logistics.'
      ]
    },
    {
      company: 'EMTEX',
      role: 'Marketing Intern',
      date: 'April 2025 – July 2025',
      location: 'Bengaluru, India',
      description: 'Gained foundational experience in corporate marketing and B2B relations.',
      points: [
        'Gained hands-on experience in B2B talks and negotiations.',
        'Assisted in executing marketing campaigns and strategies.'
      ]
    }
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            My professional journey building brands, scaling revenue, and mastering marketing.
          </p>
        </div>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500/50 via-slate-800 to-transparent"></div>

        <div className="space-y-12 md:space-y-24">
          {workExperience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-1.5 md:mt-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#030712] shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"></div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
              }`}>
                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-emerald-500/30 p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {job.role}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-300 border border-white/5">
                      {job.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-emerald-400 font-medium mb-6">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-lg">{job.company}</span>
                    <span className="text-slate-500 mx-2">•</span>
                    <span className="text-slate-400 text-sm">{job.location}</span>
                  </div>
                  
                  <p className="text-slate-300 mb-6 italic">
                    "{job.description}"
                  </p>
                  
                  <ul className="space-y-3">
                    {job.points.map((point, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-3">
                        <ArrowUpRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
