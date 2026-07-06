import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Carlos V.',
    text: 'La calidad de las carnes es excepcional. Compré un Tomahawk para el fin de semana y fue la estrella de la parrilla. Excelente atención.',
    rating: 5,
  },
  {
    name: 'María P.',
    text: 'Los quesos importados y la selección de vinos hacen de este lugar mi favorito para organizar cenas en casa. Totalmente recomendado.',
    rating: 5,
  },
  {
    name: 'Andrés M.',
    text: 'Las hamburguesas artesanales son de otro nivel. El delivery fue súper rápido y todo llegó en perfectas condiciones.',
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="opiniones" className="bg-bg-dark overflow-hidden border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Opiniones</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 uppercase">Lo que dicen <br/>nuestros clientes</h2>
          <div className="w-24 h-[1px] bg-gold mb-8" />
          <p className="text-gray-400 font-light leading-relaxed max-w-md text-sm">
            La satisfacción de nuestros clientes es nuestro mayor orgullo. Trabajamos día a día para ofrecer la mejor experiencia gourmet.
          </p>
          
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-[2px] transition-all duration-300 rounded-none ${index === activeIndex ? 'w-8 bg-gold' : 'w-4 bg-white/20'}`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[300px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ 
                opacity: index === activeIndex ? 1 : 0, 
                x: index === activeIndex ? 0 : 50,
                scale: index === activeIndex ? 1 : 0.9,
                zIndex: index === activeIndex ? 10 : 0,
                pointerEvents: index === activeIndex ? 'auto' : 'none'
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center"
            >
              <div className="bg-[#0a0a0a]/80 backdrop-blur p-8 md:p-10 rounded-none border border-white/10 shadow-2xl relative w-full">
                <div className="flex text-gold mb-4 text-[12px]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-300 font-light italic mb-6 relative z-10 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-[10px] text-white tracking-widest uppercase">
                  - {testimonial.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
