
import { MenuItem } from './types';

export const WHATSAPP_NUMBER = "5491120070203";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    title: 'Sándwich de Bondiola Completo',
    description: 'El que enamora 😍. Bondiola tierna desmenuzada, jamón, queso, huevo y papas pay en pan casero.',
    category: 'Sandwiches',
    imageUrl: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?q=80&w=1000&auto=format&fit=crop', 
    price: 9500,
    popular: true,
  },
  {
    id: '2',
    title: 'Pizza Especial Jamón y Morrones',
    description: 'Salsa de tomate casera, muzzarella abundante, jamón cocido natural y morrones asados.',
    category: 'Pizzas',
    imageUrl: 'https://tofuu.getjusto.com/orioneat-local/resized2/FjHyLkjYCz6Dv7rmq-2400-x.webp',
    price: 8900,
    popular: true,
  },
  {
    id: '3',
    title: 'Super Hamburguesa Artesanal',
    description: 'Medallón de carne 100% vacuna, cheddar, bacon crujiente, lechuga, tomate y aderezo de la casa.',
    category: 'Hamburguesas',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
    price: 7500,
  },
  {
    id: '4',
    title: 'Milanesa a la Napolitana con Papas',
    description: 'Para compartir. Milanesa de ternera con salsa, jamón, muzzarella y orégano. Sale con fritas.',
    category: 'Sandwiches',
    imageUrl: 'https://i.postimg.cc/1ts93hTW/milanesa-a-la-napolitana-con-guarnicion-de-papas-VLWFAANIWBGPFO4CSUHS7RYVVQ.avif',
    price: 12500,
    popular: true,
  },
  {
    id: '5',
    title: 'Docena de Empanadas',
    description: 'Carne cortada a cuchillo, Jamón y Queso, o Pollo. Relleno abundante y masa casera.',
    category: 'Empanadas',
    imageUrl: 'https://i.postimg.cc/DwmNKjwx/12-EMPANADAS.jpg',
    price: 10500,
  },
  {
    id: '6',
    title: 'Pizza Calabresa',
    description: 'Muzzarella y longaniza calabresa de primera calidad. Un clásico picantito.',
    category: 'Pizzas',
    imageUrl: 'https://images.unsplash.com/photo-1548369937-47519962c11a?q=80&w=1000&auto=format&fit=crop',
    price: 8500,
  }
];