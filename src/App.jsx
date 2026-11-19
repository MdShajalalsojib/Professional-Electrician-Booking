import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Booking from './Pages/Booking.jsx'

function NotFound() {
  return <main className="grid min-h-[60vh] place-items-center px-5 text-center"><div><p className="text-sm font-bold uppercase tracking-widest text-amber-600">404 error</p><h1 className="mt-3 text-4xl font-black text-slate-900">This page isn’t connected.</h1><Link className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white" to="/">Back to home</Link></div></main>
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Services />} path="/services" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Booking />} path="/booking" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
