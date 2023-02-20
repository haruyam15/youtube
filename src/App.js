import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { Outlet } from 'react-router-dom';
import LoadingProvider from './context/LoadingContext';
import Navbar from './components/Navbar';

const queryClient = new QueryClient()


function App() {
  return (
    <YoutubeApiProvider>
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <Navbar />
          <div className="content pt-[66px]">
            <Outlet />
          </div>
        </LoadingProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </YoutubeApiProvider>
  )
}

export default App;
