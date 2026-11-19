import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaStar,
  FaTools,
} from 'react-icons/fa'
import Banner from '../Components/Banner/Banner.jsx'

const services = [
  { icon: FaBolt, title: 'Electrical repairs', text: 'Fast diagnosis and dependable fixes for the things that stop working.' },
  { icon: FaTools, title: 'Installations', text: 'Careful installation for lighting, outlets, fans, and appliances.' },
  { icon: FaShieldAlt, title: 'Safety inspections', text: 'Peace of mind with checks that help keep your home protected.' },
]


export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#reviews') {
      requestAnimationFrame(() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [location.hash])

  return <>
    <Banner />

    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="font-bold uppercase tracking-[0.16em] text-amber-600">What we do</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Electrical work, done right.</h2></div><Link className="inline-flex items-center gap-2 font-bold text-slate-800 hover:text-amber-600" to="/services">All services <FaArrowRight /></Link></div>
        <div className="grid gap-5 md:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-900/5" key={title}><span className="grid size-14 place-items-center rounded-2xl bg-yellow-300/30 text-2xl text-amber-700"><Icon /></span><h3 className="mt-6 text-xl font-extrabold text-slate-900">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div>
      </div>
    </section>

    <section className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-8 lg:px-10" id="reviews"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-[0.16em] text-amber-600">Customer reviews</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Good work speaks for itself.</h2></div><div className="mx-auto mt-9 max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"><div aria-label="5 out of 5 stars" className="flex justify-center gap-1 text-yellow-500">{Array.from({ length: 5 }, (_, index) => <FaStar key={index} />)}</div><blockquote className="mt-5 text-xl font-semibold leading-8 text-slate-800">“Quick, professional, and clear about what needed fixing. I’ll call ElectroFix again.”</blockquote><p className="mt-4 text-sm font-bold text-slate-500">— A happy ElectroFix customer</p></div></div></section>

    <section className="bg-yellow-400 px-5 py-12 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6"><div><p className="text-sm font-bold uppercase tracking-widest text-slate-800/70">Ready when you are</p><h2 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">Let’s get your power back on.</h2></div><Link className="rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800" to="/booking">Book an electrician <FaArrowRight className="ml-2 inline" /></Link></div></section>
  </>
}
