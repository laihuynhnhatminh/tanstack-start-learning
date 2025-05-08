import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import superjson from 'superjson';
import { HOUR, MINUTE } from '@/constants/date.constant';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * MINUTE,
      gcTime: HOUR,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
    dehydrate: { serializeData: superjson.serialize },
    hydrate: { deserializeData: superjson.deserialize },
  },
});

type TanStackQueryProviderProps = Readonly<{
  children: React.ReactNode;
}>;

export function getContext() {
  return {
    queryClient,
  };
}

export function Provider({ children }: TanStackQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
