import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Education } from './components/Education/Education'
import { Miscellaneous } from './components/Miscellaneous/Miscellaneous'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Miscellaneous />
      <Footer />
    </div>
  )
}

export default App
