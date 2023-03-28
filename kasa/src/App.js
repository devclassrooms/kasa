import React from 'react';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
/*import Nav from './accueil/navbar';
import Foot from './accueil/footer';*/
import Nav from './components/Nav';
import Foot from './components/Footer';
import Accueil from './pages/Accueil';
import Annonces from './components/Annonce';
import Appartement from './pages/Appartement';
import Erreur404 from './pages/Erreur404';
import Imgapart from './components/ImgApart';
import Descriptionapp from './pages/Apropos';


const MainPage = () => {
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
    path: "/",
    errorElement : (<> <Nav/><Erreur404/> </>),
    element: <MainPage/>,
    children : [
      {
        path: "/apropos",
        element: <> <Descriptionapp/> </>
      },
      {
        path: "/appartement/:id",
        element: <> <Appartement/> </>
      },
      {
        path: "/",
        element: <> <Accueil/> <Annonces/> </>
      }
    ]
  },

]);

function App() {
  return (
    <div className="App">
       <RouterProvider router = {router}/>
    </div>
  );
}

export default App;


/*https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0&t=GFguAIHpIS9ay7j4-0*/
