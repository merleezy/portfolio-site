import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
