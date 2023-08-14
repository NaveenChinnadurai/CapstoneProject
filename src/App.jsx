import './App.css'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Highlights from './components/highlights'
import Testimonials from './components/testimonial'

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
    )
}

export default App
