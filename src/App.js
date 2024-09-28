import './App.css';
import Mensagem from './components/Mensagem/Mensagem';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Filmes from './components/Filmes/filmes';
import Form from './components/Form/form';

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <Mensagem cor="red">
          Boa sorte nos estudos!
        </Mensagem>
        <Filmes/>
        <section className="contato">
          <h2>Gostou? Entre em contato conosco</h2>
          <Form/>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default App;
