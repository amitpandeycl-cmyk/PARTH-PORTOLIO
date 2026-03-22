import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

export default function Achievements() {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      value: '100M+',
      label: 'Views in 1 Month',
      description: 'Viral format success guaranteeing ROI for clients.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
      value: '8 Lakh',
      label: 'Revenue in 2 Months',
      description: 'Rapid scaling and high-ticket client onboarding.'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Delivering consistent and exceptional PR results.'
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-400" />,
      value: 'Head',
      label: 'Theatre Club',
      description: 'Led people and hosted events, building strong leadership skills.'
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="absolute inset-0 bg-emerald-900/5 rounded-[3rem] -z-10 transform -skew-y-2"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Key <span className="text-emerald-400">Achievements</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Numbers that speak for themselves. A track record of rapid growth and leadership.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-900/60 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-300 group text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <h3 className="font-display text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              {stat.value}
            </h3>
            <p className="text-emerald-500 font-medium mb-4">{stat.label}</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
