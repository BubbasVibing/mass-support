import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Homepage from './pages/homepage/homepage'
import Services from './pages/services/services'
import ProgramManagement from './pages/programmanagement/programmanagement'
import HudVash from './pages/hudvash/hudvash'
import VocationalServices from './pages/vocationalservices/vocationalservices'
import About from './pages/about/about'
import Contact from './pages/contact/contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/program-management" element={<ProgramManagement />} />
            <Route path="/services/hud-vash" element={<HudVash />} />
            <Route path="/services/vocational-services" element={<VocationalServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
