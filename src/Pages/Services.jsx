import { Link } from 'react-router-dom'
import { FaArrowRight, FaBolt, FaBroadcastTower, FaFan, FaLightbulb, FaPlug, FaShieldAlt, FaTools } from 'react-icons/fa'

const services = [
  { icon: FaBolt, title: 'Electrical repairs', text: 'Troubleshooting for outages, faulty circuits, flickering lights, and electrical issues around your home.' },
  { icon: FaLightbulb, title: 'Lighting installation', text: 'Indoor and outdoor lighting, recessed fixtures, switches, dimmers, and smart lighting upgrades.' },
  { icon: FaPlug, title: 'Wiring & outlets', text: 'New outlets, safe wiring upgrades, dedicated circuits, and replacements for worn components.' },
  { icon: FaFan, title: 'Fans & appliances', text: 'Professional installation and connection for ceiling fans and everyday electrical appliances.' },
  { icon: FaShieldAlt, title: 'Safety inspections', text: 'A careful check of key electrical components to help spot concerns and keep your home safe.' },
  { icon: FaBroadcastTower, title: 'Maintenance', text: 'Preventive electrical maintenance and practical advice to keep your systems working reliably.' },
]

export default function Services() {
  return <>
    <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10"><div className="mx-auto max-w-7xl"><p className="font-bold uppercase tracking-[0.18em] text-yellow-400">Our services</p><h1 className="mt-4 max-w-3xl text-4xl font-black sm:text-6xl">The right fix, from the right professional.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">From a quick repair to a full installation, our electricians are ready to help.</p></div></section>
    <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-10"><div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl" key={title}><span className="grid size-14 place-items-center rounded-2xl bg-yellow-300/30 text-2xl text-amber-700"><Icon /></span><h2 className="mt-6 text-xl font-extrabold text-slate-900">{title}</h2><p className="mt-3 min-h-20 leading-7 text-slate-600">{text}</p><Link className="mt-5 inline-flex items-center gap-2 font-bold text-slate-900 hover:text-amber-700" to="/booking">Book this service <FaArrowRight /></Link></article>)}</div></section>
    <section className="px-5 py-16 text-center sm:px-8"><div className="mx-auto max-w-3xl"><FaTools className="mx-auto text-4xl text-amber-500" /><h2 className="mt-5 text-3xl font-black text-slate-900">Not sure what you need?</h2><p className="mt-3 text-slate-600">Tell us what’s going on and we’ll help you find the right service.</p><Link className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white hover:bg-slate-800" to="/contact">Talk to our team</Link></div></section>
  </>
}
