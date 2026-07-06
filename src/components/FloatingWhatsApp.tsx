import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/593979022584"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-bg-dark border border-white/20 text-white rounded-none flex items-center justify-center shadow-2xl hover:border-gold hover:text-gold transition-all duration-300 group backdrop-blur-sm"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
      <span className="absolute right-full mr-4 bg-[#111] border border-white/10 text-gray-300 text-[10px] tracking-widest uppercase px-4 py-2 rounded-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        ¡Hola! ¿En qué te ayudamos?
      </span>
    </motion.a>
  );
}
