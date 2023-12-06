import { ProductWithCategory } from '@/types/product';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FavoriteItemsStore {
  items: ProductWithCategory[];
  addToFavorites(data: ProductWithCategory): void;
  removeFromFavorites(productId: string): void;
}

export const useFavoriteItemsStore = create<FavoriteItemsStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToFavorites(data) {
        const alreadyInFavorites = get().items.some((item) => item._id === data._id);
        if (alreadyInFavorites) {
          return;
        }

        set({ items: [...get().items, data] });
      },

      removeFromFavorites(productId) {
        set({ items: [...get().items.filter((item) => item._id !== productId)] });
      },
    }),
    {
      name: 'favorite-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
