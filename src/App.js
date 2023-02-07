import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Watch from './pages/Watch';
import Home from './pages/Home';
import Result from './pages/Result';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        path: '/watch/:videoId',
        element: <Watch />,
      },
      {
        path: '/result/:searchKeywordParam',
        element: <Result />,
      }
    ]
  },
]);

function App() {
  return <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App;
