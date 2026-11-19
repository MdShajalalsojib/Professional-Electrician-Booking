import { Link, Route, Routes } from 'react-router-dom'
import { FaBolt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import Navbar from './Components/Navbar/Navbar.jsx'
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
      <footer className="bg-slate-950 px-5 py-10 text-slate-300 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><Link className="flex items-center gap-2 text-xl font-black text-white" to="/"><FaBolt className="text-yellow-400" /> ElectroFix</Link><p className="mt-2 text-sm text-slate-400">Your Trusted Partner for Every Electrical Solution.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"><Link className="hover:text-yellow-300" to="/services">Services</Link><Link className="hover:text-yellow-300" to="/about">About</Link><Link className="hover:text-yellow-300" to="/contact">Contact</Link><a className="inline-flex items-center gap-2 hover:text-yellow-300" href="tel:+15550142020"><FaPhoneAlt /> Call us</a><a className="inline-flex items-center gap-2 hover:text-yellow-300" href="mailto:hello@electrofix.example"><FaEnvelope /> Email</a></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} ElectroFix. All rights reserved.</div></footer>
    </div>
  )
}

export default App
