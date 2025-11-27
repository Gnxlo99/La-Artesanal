
import React from 'react';
import { Crown, MapPin, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative py-28 w-full overflow-hidden flex items-center bg-[#121212]">
      {/* Background Image - Hearty Food */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop"
          alt="Comida Artesanal"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col justify-center text-center items-center">
        
        <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
           <div className="flex items-center justify-center h-16 w-16 bg-[#B91C1C] rounded-full border-4 border-[#FFD700] shadow-xl shadow-red-900/50">
              <Crown size={32} className="text-white fill-[#FFD700]" strokeWidth={1.5} />
           </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-lg uppercase">
          La Artesanal
          <span className="block text-[#B91C1C] text-3xl md:text-5xl mt-2 drop-shadow-md font-serif tracking-widest">
            VILLA BALLESTER
          </span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl mb-8 font-light max-w-lg leading-relaxed text-shadow-sm">
           Delivery a Domicilio. <br/>
           <span className="text-[#FFD700] font-bold">¡El sandwich que enamora!</span>
        </p>

        <div className="flex items-center gap-2 text-white text-sm md:text-base mb-10 font-medium bg-[#121212]/80 backdrop-blur-md px-6 py-3 rounded-full border border-[#B91C1C]/50 shadow-lg">
          <MapPin size={18} className="text-[#B91C1C]" />
          <span>Alvear 1751, Villa Ballester</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
            <button 
            onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#B91C1C] hover:bg-[#991b1b] text-white font-extrabold py-4 px-12 rounded-full transition-all duration-300 shadow-lg shadow-red-900/40 hover:-translate-y-1 w-fit uppercase tracking-widest flex items-center gap-3 text-sm"
            >
            HACER PEDIDO
            <ArrowRight size={18} />
            </button>
        </div>
      </div>
    </div>
  );
};