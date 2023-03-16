import logo from './logo.svg';
import './App.css';
import Nav from './accueil/navbar.jsx'
import ImgHeader from './accueil/img-header.jsx'
import Product from './accueil/product.jsx'
import Fouter from './accueil/footer.jsx'

function App() {
  return (
    <div className="App">
      <Nav/>
      <ImgHeader/>
      <Product/>
      <Fouter/>
    </div>
  );
}

export default App;


/*https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0&t=GFguAIHpIS9ay7j4-0*/
