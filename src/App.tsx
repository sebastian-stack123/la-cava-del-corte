/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { Features } from './components/Features';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Delivery } from './components/Delivery';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-gold/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <Features />
        <FeaturedProducts />
        <Delivery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

