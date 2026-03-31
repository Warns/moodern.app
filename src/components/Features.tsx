import { motion } from 'framer-motion';
const features = [
{
  bustImage: "/bust-okay.avif",

  title: 'Expressive Avatars',
  description:
  'Log your daily emotions using beautifully rendered classical marble busts that change based on your mood.',
  color: 'bg-mood-yellow/10',
  bustBg: 'bg-mood-yellow/20'
},
{
  bustImage: "/bust-happy.avif",

  title: 'Rich Context Tags',
  description:
  'Add context to your feelings. Tag sleep, work, family, health, and more to see what drives your mood.',
  color: 'bg-mood-green/10',
  bustBg: 'bg-mood-green/20'
},
{
  bustImage: "/bust-sad.avif",

  title: 'Daily Journaling',
  description:
  'Write down your thoughts in a clean, distraction-free space. Reflect on your day with clarity.',
  color: 'bg-mood-blue/10',
  bustBg: 'bg-mood-blue/20'
},
{
  bustImage: "/bust-angry.avif",

  title: 'Track Patterns',
  description:
  'View your mood history on a beautiful calendar to identify trends and understand yourself better.',
  color: 'bg-mood-red/10',
  bustBg: 'bg-mood-red/20'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
export function Features() {
  return (
    <section className="py-24 bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            
            Everything you need to reflect.
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-softgray text-lg max-w-2xl mx-auto">
            
            Simple, powerful tools designed to help you build a habit of
            mindfulness without the clutter.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {features.map((feature, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-8 rounded-3xl bg-white shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow">
            
              <div className="relative w-24 h-24 mb-6 overflow-visible">
                <div
                className={`w-full h-full rounded-full ${feature.bustBg} flex items-end justify-center overflow-hidden`}>
                
                  <img
                  src={feature.bustImage}
                  alt={feature.title}
                  className="w-20 h-20 object-cover object-top" />
                
                </div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-softgray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}