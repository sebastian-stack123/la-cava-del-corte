import { Section } from './ui/Section';

export function About() {
  return (
    <Section id="nosotros" className="bg-bg-dark relative overflow-hidden border-t border-white/10">
      {/* Decorative subtle background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 bg-[#111] animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop" 
              alt="Selección Gourmet"
              className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent z-20" />
            <div className="absolute bottom-6 left-6 z-30">
              <span className="font-serif text-3xl text-gold">100%</span>
              <p className="text-white text-[10px] tracking-widest uppercase mt-1">Calidad Garantizada</p>
            </div>
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-gold/20 -z-10 hidden md:block" />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif uppercase leading-tight">
            Nuestra <br />
            <span className="text-gold italic font-light lowercase">Selección</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 font-light text-sm md:text-base leading-relaxed">
            <p>
              En <strong className="text-white font-medium">La Cava del Corte</strong> seleccionamos cuidadosamente cada producto para garantizar la mejor calidad en tu mesa.
            </p>
            <p>
              Ofrecemos carnes premium, hamburguesas artesanales, embutidos, quesos, vinos, productos importados y todo lo necesario para disfrutar una parrilla inolvidable.
            </p>
            <p>
              Nuestro compromiso es brindar frescura, calidad y atención personalizada a cada uno de nuestros clientes, convirtiendo una comida ordinaria en una experiencia gourmet excepcional.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
            <div className="border-l border-gold pl-4">
              <span className="block text-xl font-serif text-white mb-1 uppercase">Premium</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Cortes Selectos</span>
            </div>
            <div className="border-l border-gold pl-4">
              <span className="block text-xl font-serif text-white mb-1 uppercase">Gourmet</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Experiencia Única</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
