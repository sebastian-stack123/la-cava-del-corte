import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Beef } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Productos', href: '#productos' },
    { name: 'Parrilla', href: '#parrilla' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-gold rotate-45 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-135">
            <span className="text-gold font-serif font-bold -rotate-45 text-xl group-hover:-rotate-135 transition-transform duration-500">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif tracking-widest text-gold font-bold">LA CAVA <span className="text-white group-hover:text-gold transition-colors">DEL CORTE</span></span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/593979022584"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gold text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
          >
            Pedir por WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="block py-2 text-neutral-300 hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
             <a
              href="https://wa.me/593979022584"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full px-6 py-3 bg-gold text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              Pedir por WhatsApp
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
