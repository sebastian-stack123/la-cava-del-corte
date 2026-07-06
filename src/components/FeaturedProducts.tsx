import { Section } from './ui/Section';
import { motion } from 'motion/react';

const products = [
  { name: 'Tomahawk Premium', category: 'Corte Especial', image: 'https://images.unsplash.com/photo-1594046243098-0fceea9d451e?q=80&w=2940&auto=format&fit=crop' },
  { name: 'Ribeye Añejado', category: 'Carnes', image: 'https://images.unsplash.com/photo-1607116176195-b81b1f41f536?q=80&w=2940&auto=format&fit=crop' },
  { name: 'Picaña Selección', category: 'Carnes', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2940&auto=format&fit=crop' },
  { name: 'Prosciutto Importado', category: 'Embutidos', image: 'https://images.unsplash.com/photo-1542314959-19eb7f63ec25?q=80&w=2940&auto=format&fit=crop' },
];

export function FeaturedProducts() {
  return (
    <Section id="productos" className="bg-[#0a0a0a] border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Catálogo Gourmet</span>
          <h2 className="text-4xl md:text-5xl font-serif uppercase">Productos Destacados</h2>
        </div>
        <a 
          href="https://wa.me/593979022584"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors pb-1 inline-flex w-fit text-[10px] uppercase tracking-widest border-b border-white/20 hover:border-white"
        >
          Ver catálogo completo
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div 
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-bg-dark mb-4 border border-white/10">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Overlay Button */}
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <a 
                  href={`https://wa.me/593979022584?text=Hola, quiero consultar la disponibilidad de ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-black/80 backdrop-blur-md text-white hover:text-black hover:bg-white text-[9px] tracking-widest uppercase font-bold text-center block border border-white/10 transition-all"
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
            <div>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">{product.category}</span>
              <h3 className="text-lg font-serif text-white mt-1 uppercase group-hover:text-gold transition-colors">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
