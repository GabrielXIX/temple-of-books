import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  const arreglo = ['Anakin Skywalker', 'Luke Skywalker', 'Darth Maul', 'Darth Vader', 'Obi-Wan Kenobi',];

  return (
    <div className="App">
      <Banner texto='Star Wars' />
      <Header />
      <Banner texto='Characters' />
      <Body texto='List' arreglo={arreglo} />
      <Footer>
        <p>Copyright 2023 by Equipo 19 Programación Web.</p>
      </Footer>
    </div>
  );
}

export default App;
