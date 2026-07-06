import { Section } from './ui/Section';
import { MessageCircle, Instagram, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <Section id="contacto" className="bg-[#0a0a0a] border-t border-white/10">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Estamos para ti</span>
        <h2 className="text-4xl md:text-5xl font-serif uppercase">Contacto</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mt-6" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h3 className="text-2xl font-serif text-white mb-8 uppercase">Ponte en contacto</h3>
          <p className="text-gray-400 font-light mb-10 leading-relaxed text-sm">
            ¿Tienes alguna consulta especial, pedido para un evento o necesitas asesoramiento sobre nuestros cortes? Escríbenos y con gusto te atenderemos.
          </p>
          
          <div className="space-y-4">
            <a 
              href="https://wa.me/593979022584"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 rounded-none bg-bg-panel border border-white/10 hover:border-gold/30 hover:bg-bg-dark transition-all group"
            >
              <div className="text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-white font-medium uppercase text-sm tracking-widest mb-1">WhatsApp</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-wide">Atención rápida y pedidos</span>
              </div>
            </a>

            <a 
              href="https://instagram.com/lacavadelcorte.ec"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 rounded-none bg-bg-panel border border-white/10 hover:border-gold/30 hover:bg-bg-dark transition-all group"
            >
              <div className="text-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-white font-medium uppercase text-sm tracking-widest mb-1">Instagram</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-wide">@lacavadelcorte.ec</span>
              </div>
            </a>

            <a 
              href="tel:+593979022584"
              className="flex items-center gap-6 p-6 rounded-none bg-bg-panel border border-white/10 hover:border-gold/30 hover:bg-bg-dark transition-all group"
            >
              <div className="text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-white font-medium uppercase text-sm tracking-widest mb-1">Llamada</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-wide">097 902 2584</span>
              </div>
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-panel/50 p-8 md:p-12 rounded-none border border-white/10"
        >
          <h3 className="text-xl font-serif text-white mb-8 uppercase">Envíanos un mensaje</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-gold mb-2">Nombre completo</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-bg-dark border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest text-gold mb-2">Teléfono</label>
              <input 
                type="tel" 
                id="phone"
                className="w-full bg-bg-dark border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                placeholder="Tu teléfono"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-gold mb-2">Mensaje</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-bg-dark border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold transition-colors resize-none text-sm"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-[10px] transition-all border border-transparent hover:bg-transparent hover:border-white hover:text-white mt-4"
            >
              Enviar Mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
