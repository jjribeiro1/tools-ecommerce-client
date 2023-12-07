'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '@clerk/nextjs';
import { useCartStore } from '@/store/cart';
import { useFavoriteItemsStore } from '@/store/favorites';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const { isSignedIn } = useAuth();
  const resetCartStore = useCartStore((state) => state.resetStore);
  const resetFavoriteStore = useFavoriteItemsStore((state) => state.resetStore);
  
  if (!isSignedIn) {
    resetCartStore();
    resetFavoriteStore();
  }

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
