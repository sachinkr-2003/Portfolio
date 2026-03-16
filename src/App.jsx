import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Preloader from './Components/Preloader'
import ScrollToTop from './Components/ScrollToTop'
import Home from './Page/Home'
import About from './Page/About'
import Skills from './Page/Skills'
import Projects from './Page/Projects'
import Experiences from './Page/Experiences'
import Contact from './Page/Contact'
import './index.css'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isHomePage && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}