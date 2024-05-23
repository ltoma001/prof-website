import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills'
import Misc from './components/Misc';
import Footer from './components/Footer';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <div className="hidden">
        <About/>
      </div>
      <div className="hidden">
        <Skills/>
      </div>
      <div className="hidden">
        <Education/>
      </div>
      <div className="hidden">
        <Experience/>
      </div>
      <div className="hidden">
        <Misc/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
