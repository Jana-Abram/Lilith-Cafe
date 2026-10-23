import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;