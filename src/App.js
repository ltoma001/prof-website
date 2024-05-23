import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills'
import Misc from './components/Misc';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Experience/>
      <Misc/>
      <Footer/>
    </div>
  );
}

export default App;
