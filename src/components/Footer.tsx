import { Beef, MapPin, Phone, Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-dark border-t border-white/10 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                <Beef className="w-6 h-6 text-gold" strokeWidth={1} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-none tracking-[0.2em] text-white">
                  LA CAVA
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-medium">
                  Del Corte
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              Carnicería gourmet especializada en carnes premium, hamburguesas artesanales, embutidos, quesos, vinos y productos importados.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/lacavadelcorte.ec" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/593979022584" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 uppercase">Enlaces</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light uppercase tracking-widest text-[10px]">
              <li><a href="#inicio" className="hover:text-gold transition-colors block">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-gold transition-colors block">Nosotros</a></li>
              <li><a href="#productos" className="hover:text-gold transition-colors block">Productos</a></li>
              <li><a href="#delivery" className="hover:text-gold transition-colors block">Delivery</a></li>
              <li><a href="#contacto" className="hover:text-gold transition-colors block">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 uppercase">Horario</h4>
            <ul className="space-y-4 text-gray-400 text-[10px] font-light uppercase tracking-widest">
              <li className="flex flex-col gap-1">
                <span className="text-gold">Lunes - Viernes</span>
                <span className="text-white">10:00 - 18:00</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-gold">Sábado</span>
                <span className="text-white">10:00 - 15:00</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-gold">Domingo</span>
                <span className="text-gray-500">Cerrado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 uppercase">Ubicación</h4>
            <ul className="space-y-6 text-gray-400 text-[10px] uppercase font-light tracking-widest">
              <li className="flex gap-4">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="leading-relaxed">Av. González Suárez 894<br/>Local S8<br/>Quito, Ecuador</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>097 902 2584</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} La Cava del Corte. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              Creado por <span className="text-gold font-medium">Mantai</span>
            </p>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
