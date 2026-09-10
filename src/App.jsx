import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Manifest from './components/Manifest.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Tournaments from './components/Tournaments.jsx'
import Rules from './components/Rules.jsx'
import Promos from './components/Promos.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="grain relative bg-void text-bone">
      <Nav />
      <Hero />
      <Ticker />
      <Manifest />
      <Services />
      <Gallery />
      <Tournaments />
      <Promos />
      <Rules />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
