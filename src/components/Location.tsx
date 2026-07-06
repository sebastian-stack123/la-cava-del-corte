import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

export function Location() {
  return (
    <Section id="ubicacion" className="bg-[#0a0a0a] border-t border-white/10">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Visítanos</span>
        <h2 className="text-4xl md:text-5xl font-serif uppercase">Nuestra Ubicación</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mt-6" />
      </div>

      <div className="grid lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <div className="bg-bg-panel h-full p-8 md:p-12">
            <h3 className="text-2xl font-serif text-white mb-8 uppercase">Información</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gold uppercase text-[10px] tracking-widest mb-2">Dirección</h4>
                  <p className="text-white text-sm font-light">Av. González Suárez 894<br/>Local S8<br/>Quito, Ecuador</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gold uppercase text-[10px] tracking-widest mb-2">Teléfono</h4>
                  <p className="text-white text-sm font-light">097 902 2584</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-gold uppercase text-[10px] tracking-widest mb-4">Horario de Atención</h4>
                <ul className="text-sm font-light text-gray-300 space-y-3">
                  <li className="flex justify-between"><span>Lunes a Viernes</span> <span className="text-white">10:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Sábado</span> <span className="text-white">10:00 AM - 3:00 PM</span></li>
                  <li className="flex justify-between"><span>Domingo</span> <span className="text-gold">Cerrado</span></li>
                </ul>
              </div>
            </div>
            
            <a 
              href="https://goo.gl/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full py-4 bg-transparent hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest text-[10px] text-center block transition-colors border border-white"
            >
              Abrir en Google Maps
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 overflow-hidden h-[400px] lg:h-auto bg-neutral-800 relative"
        >
          {/* Using a placeholder for Google Maps map to keep it simple, typically you'd embed the iframe here */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.251390977282!2d-78.4878479!3d-0.201402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a72b2260655%3A0xc3c9e6bbafbfb3!2sAv.%20Gonz%C3%A1lez%20Su%C3%A1rez%2C%20Quito!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%) contrast(120%)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          ></iframe>
        </motion.div>
      </div>
    </Section>
  );
}
