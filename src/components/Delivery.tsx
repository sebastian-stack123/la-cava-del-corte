import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Truck, MessageCircle } from 'lucide-react';

export function Delivery() {
  return (
    <Section id="delivery" className="bg-[#0a0a0a] border-t border-white/10">
      <div className="relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-bg-dark/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1615865417482-eb06c4b2ba20?q=80&w=2940&auto=format&fit=crop" 
            alt="Delivery Gourmet"
            className="w-full h-full object-cover opacity-80"
            loading="lazy"
          />
        </div>
        
        <div className="relative z-10 py-24 px-6 md:px-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 bg-bg-dark/80 backdrop-blur-md rounded-none flex items-center justify-center mx-auto mb-8 border border-gold/50 rotate-45"
          >
            <Truck className="w-8 h-8 text-gold -rotate-45" strokeWidth={1.5} />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase"
          >
            Llevamos la calidad <br/><span className="text-gold italic font-light lowercase">a tu puerta</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-gray-300 font-light mb-10"
          >
            Recibe tus productos favoritos directamente en tu hogar con la misma frescura y cuidado que en nuestra tienda.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="https://wa.me/593979022584"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-1"
            >
              Pedir por WhatsApp
            </a>
            <p className="mt-6 text-gray-500 text-[10px] uppercase tracking-widest">Línea directa: <strong className="text-white font-normal">097 902 2584</strong></p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
