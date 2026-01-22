import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Page/Home'
import About from './Page/About'
import Skills from './Page/Skills'
import Projects from './Page/Projects'
import Experiences from './Page/Experiences'
import Contact from './Page/Contact'
import './index.css'
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}