import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Nav from './accueil/navbar';
import Foot from './accueil/footer';
import Error404 from './erreur404/error404';
import Appartement from './appartement/appartement';
import Apropos from './apropos/apropos'

const Navfooter = () => {
  return (
  <>
    <Nav/>
    <main>
    <Outlet/>
    </main>
    <Foot/>
  </>
  );
};

const router = createBrowserRouter([
  {
    errorElement : (<> <Nav/><Error404/> </>),
    element: <Navfooter/>,
    children : [
      {
        path: "/apropos",
        element: <Apropos/>
      },
      {
        path: "/appartement",
        element: <Appartement/>
      }
    ]
  },
  {
    path: "/",
    element: <App/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
