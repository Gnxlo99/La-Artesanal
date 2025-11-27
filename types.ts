
export type Category = 'Todos' | 'Pizzas' | 'Sandwiches' | 'Hamburguesas' | 'Empanadas';

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}