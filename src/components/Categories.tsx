import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Beef, Wine, ChefHat, Box } from 'lucide-react';

const categories = [
  {
    name: 'Carnes Premium',
    image: 'https://images.unsplash.com/photo-1607116176195-b81b1f41f536?q=80&w=2940&auto=format&fit=crop',
    icon: Beef,
  },
  {
    name: 'Hamburguesas Artesanales',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2799&auto=format&fit=crop',
    icon: ChefHat, // No exact Burger icon in lucide-react by default in older versions without checking, wait Lucide has a Burger icon? Let's use something safe or fallback. Wait, lucide-react standard icons. Beef, Wine, Store, ShoppingBag. Let's use standard ones.
  },
  {
    name: 'Embutidos',
    image: 'https://images.unsplash.com/photo-1542314959-19eb7f63ec25?q=80&w=2940&auto=format&fit=crop',
    icon: Box,
  },
  {
    name: 'Quesos Gourmet',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2946&auto=format&fit=crop',
    icon: Box,
  },
  {
    name: 'Vinos',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2940&auto=format&fit=crop',
    icon: Wine,
  },
  {
    name: 'Productos para Parrilla',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop',
    icon: ChefHat,
  },
];

export function Categories() {
  return (
    <Section id="categorias" className="bg-[#0a0a0a] border-t border-white/10">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Nuestra Oferta</span>
        <h2 className="text-4xl md:text-5xl font-serif uppercase">Categorías</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-bg-dark"
            >
              <div className="absolute inset-0 bg-[#111] animate-pulse" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end border border-transparent group-hover:border-gold/20 transition-colors duration-500">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-gold text-2xl mb-4 font-serif opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                  <h3 className="text-xl font-serif text-white uppercase tracking-wider">{category.name}</h3>
                  <div className="w-8 h-[1px] bg-gold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
