
import React, { useState } from 'react';
import { Plus, Pizza, Sandwich, Hexagon, CircleDot } from 'lucide-react';
import { MenuItem, Category } from '../types';
import { MENU_ITEMS } from '../constants';

interface MenuGridProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuGrid: React.FC<MenuGridProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const categories: Category[] = ['Todos', 'Pizzas', 'Sandwiches', 'Hamburguesas', 'Empanadas'];

  const filteredItems = activeCategory === 'Todos' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  // Helper to get icon based on category
  const getCategoryIcon = (cat: Category) => {
    switch (cat) {
      case 'Pizzas': return <Pizza size={18} />;
      case 'Sandwiches': return <Sandwich size={18} />;
      case 'Hamburguesas': return <Hexagon size={18} />;
      default: return <CircleDot size={18} />;
    }
  };

  return (
    <section id="menu-section" className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#121212]">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide uppercase">
          Nuestro <span className="text-[#B91C1C]">Menú</span>
        </h2>
        <div className="flex justify-center gap-1">
            <div className="w-16 h-1 bg-[#B91C1C] rounded-full"></div>
            <div className="w-4 h-1 bg-[#FFD700] rounded-full"></div>
            <div className="w-16 h-1 bg-[#B91C1C] rounded-full"></div>
        </div>
      </div>

      {/* Categories Nav */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 px-4 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                whitespace-nowrap px-6 py-3 font-bold rounded-full text-sm transition-all duration-200 border flex items-center gap-2 tracking-wide uppercase
                ${activeCategory === cat 
                  ? 'bg-[#B91C1C] text-white border-[#B91C1C] shadow-lg shadow-red-900/40' 
                  : 'bg-transparent text-gray-400 border-[#333] hover:border-[#B91C1C] hover:text-white'}
              `}
            >
              {cat !== 'Todos' && getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-[#1A1A1A] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-red-900/10 transition-all duration-300 border border-[#2A2A2A] hover:border-[#B91C1C]/30 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              {item.popular && (
                <div className="absolute top-4 right-4 bg-[#FFD700] text-black text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md border border-black/10">
                  Asombroso
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow relative">
              <div className="absolute -top-6 left-6">
                 <span className="text-[10px] font-bold text-white bg-[#B91C1C] px-3 py-1 rounded-full uppercase tracking-wider border border-[#1A1A1A] shadow-sm">
                  {item.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 mt-2 group-hover:text-[#B91C1C] transition-colors leading-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#333]">
                <span className="text-2xl font-bold text-white">
                  ${item.price.toLocaleString('es-AR')}
                </span>
                <button
                  onClick={() => onAddToCart(item)}
                  className="bg-[#B91C1C] text-white hover:bg-[#991b1b] p-3 rounded-full transition-all duration-300 active:scale-95 shadow-lg flex items-center gap-2 group/btn"
                  aria-label="Agregar al carrito"
                >
                  <Plus size={20} strokeWidth={2.5} />
                  <span className="text-xs font-bold uppercase hidden group-hover/btn:inline-block pr-1">Agregar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};