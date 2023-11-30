import { ProductWithCategory } from '@/types/product';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartStore {
  items: {
    product: ProductWithCategory;
    quantity: number;
  }[];

  addProduct(data: ProductWithCategory): void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addProduct(data) {
        const alreadyInCart = get().items.some((value) => value.product._id === data._id);
        if (alreadyInCart) {
          return;
        }
        set({ items: [...get().items, { product: data, quantity: 1 }] });
      },
    }),

    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
