import { ProductWithCategory } from '@/types/product';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CartStoreItem = {
  product: ProductWithCategory;
  quantity: number;
};

interface CartStore {
  items: CartStoreItem[];
  addProduct(data: ProductWithCategory): void;
  removeProduct(productId: string): void;
  increaseProductQuantity(data: CartStoreItem): void;
  decreaseProductQuantity(data: CartStoreItem): void;
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

      removeProduct(productId) {
        set({ items: [...get().items.filter((item) => item.product._id !== productId)] });
      },

      increaseProductQuantity(data) {
        const findIndex = get().items.findIndex((item) => item.product._id === data.product._id);
        if (findIndex === -1) {
          return;
        }
        get().items[findIndex] = { product: data.product, quantity: data.quantity + 1 };
        set({ items: [...get().items] });
      },

      decreaseProductQuantity(data) {
        const findIndex = get().items.findIndex((item) => item.product._id === data.product._id);
        if (findIndex === -1 || data.quantity === 1) {
          return;
        }
        get().items[findIndex] = { product: data.product, quantity: data.quantity - 1 };
        set({ items: [...get().items] });
      },
    }),

    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
