import './App.css';
import Mensagem from './components/Mensagem/Mensagem';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Games from './components/Games/games';
import Form from './components/Form/form';

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <Mensagem cor="red">
          “Às vezes é melhor ter paciência do que agir impulsivamente” - The Legend of Zelda: Breath of the Wild
        </Mensagem>
        <Games/>
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
