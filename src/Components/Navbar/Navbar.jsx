import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  FaBolt,
  FaCalendarAlt,
  FaCog,
  FaEnvelope,
  FaHome,
  FaBars,
  FaStar,
  FaTimes,
  FaUsers,
} from 'react-icons/fa'

const links = [
  { label: 'Home', to: '/', icon: FaHome },
  { label: 'Services', to: '/services', icon: FaCog },
  { label: 'About', to: '/about', icon: FaUsers },
  { label: 'Reviews', to: '/#reviews', icon: FaStar, isHash: true },
  { label: 'Contact', to: '/contact', icon: FaEnvelope },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition hover:bg-white/10 hover:text-yellow-300 ${isActive ? 'bg-yellow-400 text-slate-950 hover:bg-yellow-300 hover:text-slate-950' : 'text-slate-100'}`

  function renderLink({ label, to, icon: Icon, isHash }) {
    if (isHash) return <Link className="flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10 hover:text-yellow-300" key={to} onClick={() => setMenuOpen(false)} to={to}><Icon aria-hidden="true" />{label}</Link>
    return <NavLink className={linkClass} end={to === '/'} key={to} onClick={() => setMenuOpen(false)} to={to}><Icon aria-hidden="true" />{label}</NavLink>
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-300/15 bg-[#03132d] text-white shadow-lg shadow-slate-950/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10" aria-label="Main navigation">
        <Link className="flex shrink-0 items-center gap-2.5" onClick={() => setMenuOpen(false)} to="/">
          <span className="relative grid size-12 place-items-center text-yellow-400"><FaHome className="absolute size-12" /><FaBolt className="relative mt-2 text-2xl text-[#03132d]" /></span>
          <span><span className="block text-xl font-black tracking-tight sm:text-2xl">Electro<span className="text-yellow-400">Fix</span></span><span className="hidden text-xs text-slate-300 sm:block">Powering Your Life</span></span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">{links.map(renderLink)}</div>
        <Link className="hidden shrink-0 items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300 md:inline-flex" to="/booking"><FaCalendarAlt aria-hidden="true" /> Book Now <span aria-hidden="true">→</span></Link>
        <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 text-xl lg:hidden" onClick={() => setMenuOpen(!menuOpen)} type="button">{menuOpen ? <FaTimes /> : <FaBars />}</button>
      </nav>
      {menuOpen && <div className="border-t border-white/10 px-5 pb-5 pt-3 lg:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-2 sm:px-3">{links.map(renderLink)}<Link className="mt-2 flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-center font-bold text-slate-950" onClick={() => setMenuOpen(false)} to="/booking"><FaCalendarAlt /> Book Now</Link></div></div>}
    </header>
  )
}
