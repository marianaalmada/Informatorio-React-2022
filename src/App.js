/*import logo from './logo.svg';*/
import './App.css';
import './Noticia.css';
import Noticia from './components/Noticia';
import ComponenteClase from './components/ComponenteClase';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
      <Noticia prop="Esta es la propiedad del componente noticia"></Noticia>
      <ComponenteClase prop="Propiedad del ComponenteClase"></ComponenteClase>
    </div>
  );
}

export default App;