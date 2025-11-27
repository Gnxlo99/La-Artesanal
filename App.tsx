
import React, { useState, useEffect } from 'react';
import { ShoppingCart, MapPin, Clock, ExternalLink, Crown, Phone } from 'lucide-react';
import { Hero } from './components/Hero';
import { MenuGrid } from './components/MenuGrid';
import { Cart } from './components/Cart';
import { MenuItem, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);

  // Handle Scroll Effect for Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Logic
  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
    
    // Trigger badge animation
    setIsItemAdded(true);
    setTimeout(() => setIsItemAdded(false), 300);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#121212] font-sans antialiased text-[#E0E0E0]">
      
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#121212]/95 shadow-lg backdrop-blur-md py-3 border-b border-[#333]' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             {/* Logo Representation */}
             <div className="h-11 w-11 rounded-full bg-[#B91C1C] flex items-center justify-center border-2 border-[#FFD700] shadow-lg overflow-hidden">
               <Crown size={20} className="text-white fill-[#FFD700]" />
             </div>
             <div className="flex flex-col">
               <span className="font-sans font-bold text-white tracking-wide text-lg md:text-xl leading-none group-hover:text-[#B91C1C] transition-colors uppercase">
                 La Artesanal
               </span>
               <span className="text-[#FFD700] text-[10px] font-bold tracking-widest uppercase ml-1">
                 VILLA BALLESTER
               </span>
             </div>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className={`relative p-3 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-[#B91C1C] text-white shadow-md' 
                : 'bg-black/60 text-white backdrop-blur-md hover:bg-[#B91C1C] hover:text-white border border-[#333] hover:border-[#B91C1C]'
            }`}
          >
            <ShoppingCart size={22} strokeWidth={2.5} />
            {totalItems > 0 && (
              <span className={`absolute -top-2 -right-2 bg-[#FFD700] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#121212] transition-transform ${isItemAdded ? 'scale-125' : 'scale-100'}`}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <MenuGrid onAddToCart={addToCart} />
      </main>

      {/* Cart Drawer */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onUpdateQuantity={updateQuantity} 
      />

      {/* Footer La Artesanal */}
      <footer className="bg-[#121212] text-white py-16 border-t border-[#333]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             
             {/* Brand */}
             <div className="text-center md:text-left flex flex-col items-center md:items-start">
               <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#B91C1C] flex items-center justify-center shadow-lg border border-[#FFD700]">
                    <Crown size={18} className="text-white fill-[#FFD700]" />
                  </div>
                  <span className="font-bold text-2xl tracking-wide uppercase">LA ARTESANAL</span>
               </div>
               <p className="text-gray-400 font-light leading-relaxed max-w-sm mx-auto md:mx-0 text-sm">
                 Pizzas, hamburguesas y sandwiches abundantes. La calidad y el sabor que nos caracteriza.
               </p>
               <div className="mt-6 flex items-center justify-center md:justify-start gap-2">
                  <div className="h-2 w-8 bg-[#B91C1C] rounded-full"></div>
                  <div className="h-2 w-8 bg-[#FFD700] rounded-full"></div>
                  <div className="h-2 w-8 bg-[#B91C1C] rounded-full"></div>
               </div>
             </div>

             {/* Ubicación y Horarios */}
             <div className="space-y-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                   <div className="text-[#FFD700] bg-[#222] p-2 rounded-lg border border-[#333]">
                      <MapPin size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg mb-1">Alvear 1751</h4>
                      <p className="text-gray-400 text-sm">Villa Ballester, Buenos Aires</p>
                   </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                   <div className="text-[#B91C1C] bg-[#222] p-2 rounded-lg border border-[#333]">
                      <Clock size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg mb-1">Horarios</h4>
                      <p className="text-gray-400 text-sm text-balance">
                        Todos los días 19 a 23 hs<br/>(Martes Cerrado)
                      </p>
                   </div>
                </div>
             </div>

             {/* Contacto */}
             <div className="text-center md:text-right flex flex-col items-center md:items-end justify-center">
                <div className="flex flex-col items-center md:items-end gap-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone size={16} className="text-[#B91C1C]" />
                    <span>7396-5729</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone size={16} className="text-[#B91C1C]" />
                    <span>2007-0203</span>
                  </div>
                </div>
                <a href="https://www.instagram.com/la_artesanal_oficial/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-white text-lg font-bold hover:text-[#FFD700] transition-colors">
                   Seguinos en Instagram
                   <ExternalLink size={18} className="group-hover:-translate-y-1 transition-transform" />
                </a>
                <p className="text-gray-500 text-sm mt-2 font-mono">
                  @la_artesanal_oficial
                </p>
             </div>
          </div>
          
          <div className="border-t border-[#333] mt-12 pt-8 text-center">
             <p className="text-gray-600 text-xs font-medium uppercase tracking-wider">
                &copy; {new Date().getFullYear()} La Artesanal - Villa Ballester.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;