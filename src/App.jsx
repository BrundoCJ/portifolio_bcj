import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
