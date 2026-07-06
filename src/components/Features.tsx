import { Section } from './ui/Section';
import { ShieldCheck, Leaf, Star, HeartHandshake, Truck, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  { icon: ShieldCheck, title: 'Calidad Premium', desc: 'Seleccionamos solo los mejores cortes para garantizar excelencia.' },
  { icon: Leaf, title: 'Productos Frescos', desc: 'Garantizamos la frescura de cada producto que llega a tu mesa.' },
  { icon: Star, title: 'Selección Gourmet', desc: 'Productos de alta gama pensados para paladares exigentes.' },
  { icon: HeartHandshake, title: 'Atención Personalizada', desc: 'Asesoramiento experto para que elijas siempre lo mejor.' },
  { icon: Truck, title: 'Delivery', desc: 'Envíos seguros y rápidos directo a la puerta de tu hogar.' },
  { icon: Globe, title: 'Productos Importados', desc: 'Sabores del mundo para complementar tus mejores platos.' },
];

export function Features() {
  return (
    <Section id="por-que-elegirnos" className="bg-bg-dark relative border-t border-white/10">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Diferenciales</span>
        <h2 className="text-4xl md:text-5xl font-serif uppercase">¿Por qué elegirnos?</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-bg-panel hover:bg-bg-dark transition-all duration-300 group flex flex-col justify-center relative"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                <Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-white mb-2 uppercase">{feature.title}</h3>
              <p className="text-gray-500 font-light text-[11px] uppercase tracking-wide leading-relaxed">{feature.desc}</p>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-8 h-[1px] bg-gold" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
