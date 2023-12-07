'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as Toast from '@radix-ui/react-toast';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toast.Provider duration={5000}>{children}</Toast.Provider>
    </QueryClientProvider>
  );
}
