
import React from 'react';
import { X, Minus, Plus, MessageCircle, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let message = "Hola *La Artesanal*! 👑 Quiero hacer un pedido:\n\n";
    
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.title} ($${(item.price * item.quantity).toLocaleString('es-AR')})\n`;
    });

    message += `\n*Total: $${subtotal.toLocaleString('es-AR')}*`;
    message += "\n\n📍 Dirección de envío: ";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-[450px] bg-[#121212] z-50 transform transition-transform duration-300 ease-out shadow-2xl flex flex-col border-l border-[#333] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 border-b border-[#333] flex justify-between items-center bg-[#121212]">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 uppercase tracking-wide">
            Tu Pedido <span className="text-[#B91C1C]">👑</span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-[#333] rounded-full transition-colors text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#121212]">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <div className="bg-[#1E1E1E] p-6 rounded-full border border-[#333]">
                <ShoppingBag size={40} className="text-[#B91C1C]" />
              </div>
              <p className="text-xl font-light text-gray-400">Tu carrito está vacío</p>
              <button 
                onClick={onClose}
                className="text-[#B91C1C] hover:text-[#FFD700] text-lg font-bold mt-2 hover:underline uppercase"
              >
                VER MENÚ
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-[#1E1E1E] p-3 rounded-xl border border-[#333]">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-20 h-20 object-cover rounded-lg bg-[#333]"
                />
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-white font-medium text-sm leading-tight line-clamp-1">{item.title}</h3>
                    <p className="text-[#FFD700] font-bold text-base mt-1">
                      ${(item.price * item.quantity).toLocaleString('es-AR')}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 w-fit bg-[#2A2A2A] rounded-lg p-1 border border-[#333]">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center bg-black/50 rounded-md hover:bg-black text-white transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-white font-bold text-sm w-5 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center bg-[#B91C1C] text-white rounded-md hover:bg-[#991b1b] transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-[#121212] border-t border-[#333] pb-8 sm:pb-6 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-10">
            <div className="flex justify-between items-end mb-6">
              <span className="text-gray-400 text-lg font-medium">Total</span>
              <span className="text-4xl font-bold text-white">
                ${subtotal.toLocaleString('es-AR')}
              </span>
            </div>
            
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-[#25D366]/20 transition-all flex items-center justify-center gap-3 tracking-wide uppercase"
            >
              <MessageCircle size={24} strokeWidth={2.5} />
              Enviar a WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};