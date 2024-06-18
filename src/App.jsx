import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './shared/Router';
import ReviewModal from './components/Layout/Modal/ReviewModal';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReviewModal />
      </QueryClientProvider>
    </>
  );
}

export default App;
