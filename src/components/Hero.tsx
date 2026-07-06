import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1594046243098-0fceea9d451e?q=80&w=2940&auto=format&fit=crop" 
          alt="Premium steak on grill"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold block italic text-lg md:text-2xl tracking-[0.3em] font-light uppercase mb-4">
            Experiencia Gourmet
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl"
        >
          LA CAVA<br /><span className="italic font-light">DEL CORTE</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Descubre una experiencia gastronómica única en González Suárez. Encuentra carnes premium, hamburguesas artesanales, embutidos, quesos, vinos y productos cuidadosamente seleccionados para elevar cada comida.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <a 
            href="#productos" 
            className="w-full sm:w-auto border border-white px-8 py-3.5 text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group"
          >
            Ver Productos
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://wa.me/593979022584"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black px-8 py-3.5 text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all hover:bg-gray-200"
          >
            Pedir por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-400">Descubre</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
