import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home';
import Animals from './components/Animals/Animals';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import reportWebVitals from './reportWebVitals';
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
   element: <Cart />,
  },

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
reportWebVitals();
