import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import NotFound from './pages/NotFound';
import Watch from './pages/Watch';
import Home from './pages/Home';
import Result from './pages/Result';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
