import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Nav from './accueil/navbar';
import Foot from './accueil/footer';
import Error404 from './erreur404/error404';


const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      errorElement : <div><Nav/><Error404/></div>
  },
  {
      path: "/",
      element: <h1>Accueil</h1>
  },
  {
    path: "/apropos",
    element: <div><Nav/> <h1>A propos</h1> <Foot/></div>
  },
  {
    path: "/appartement",
    element: <h1>Appartement</h1>
  },
  {
    path: "/404",
    element: <h1>Erreur 404</h1>
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
