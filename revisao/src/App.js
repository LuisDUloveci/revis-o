import './App.css';
import Imagem from './img/predio.png';
import NoticiaComponente from './components/Noticia';

function App() {
  return (
    <div className="App">
      <h1>Minha primeira noticia</h1>
      <NoticiaComponente 
        titulo="Um titulo legal"
        imagem={Imagem}
        descricao="Descrição breve da noticia, dizendo que o alunoi Kaue vai tomar anotação"  
        categoria="anotação"    
      />
    </div>
  );
}

export default App;
