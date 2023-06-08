import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home'
import Animals from './routes/Animals';
import Login from './routes/Login';
import Signup from './routes/Signup';
import CartPage from './routes/CartPage'
import CheckoutPage from './routes/CheckoutPage'
import ErrorPage from './routes/CheckoutPage'
import PrivateRoute from './routes/PrivateRoute';
import SingleProductPage from './routes/SingleProductPage';

// import { ProductsProvider } from './context/products_context';
// import { FilterProvider } from './context/filter_context';
// import { CartProvider } from './context/cart_context';
// import { UserProvider } from './context/user_context';
// import { Auth0Provider } from '@auth0/auth0-react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, 
  {
    path: "/animals",
    element: <Animals/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
   path: "/cart",
   element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />
  },
  {
    path: "/error",
    element: <ErrorPage />
  },
  {
    path: "/singleProduct",
    element: <SingleProductPage />
  },
  {
    path: "/privateRoute",
    element: <PrivateRoute />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

