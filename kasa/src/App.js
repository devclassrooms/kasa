import React from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Nav from './components/Nav';
import Foot from './components/Footer';
import Accueil from './pages/Accueil';
import Annonces from './components/Annonce';
import Appartement from './pages/Appartement';
import Erreur404 from './pages/Erreur404';
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

