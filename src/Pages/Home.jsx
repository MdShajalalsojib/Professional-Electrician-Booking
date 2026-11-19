import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaArrowRight,
  FaBolt,
  FaCheck,
  FaClock,
  FaHeadset,
  FaPhoneAlt,
  FaShieldAlt,
  FaStar,
  FaTag,
  FaTools,
} from 'react-icons/fa'
import technicianImage from '../assets/electrofix-technician.jpg'

const services = [
  { icon: FaBolt, title: 'Electrical repairs', text: 'Fast diagnosis and dependable fixes for the things that stop working.' },
  { icon: FaTools, title: 'Installations', text: 'Careful installation for lighting, outlets, fans, and appliances.' },
  { icon: FaShieldAlt, title: 'Safety inspections', text: 'Peace of mind with checks that help keep your home protected.' },
]

const benefits = [
  { icon: FaClock, title: 'Fast', caption: 'Service' },
  { icon: FaShieldAlt, title: 'Safe &', caption: 'Reliable' },
  { icon: FaTag, title: 'Affordable', caption: 'Prices' },
  { icon: FaHeadset, title: '24/7', caption: 'Support' },
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#reviews') {
      requestAnimationFrame(() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [location.hash])

  return <>
    <section className="relative isolate overflow-hidden bg-[#031532] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_45%,rgba(0,102,255,0.55),transparent_52%),linear-gradient(115deg,#031532_12%,#052859_70%,#031532)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#00102b] to-transparent" />
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-2 px-5 pb-10 pt-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:pb-16 lg:pt-14">
        <div className="relative z-10 max-w-2xl py-8 lg:py-14">
          <div className="mb-5 flex items-center gap-3 text-yellow-400"><FaBolt className="text-4xl" /><p className="text-sm font-bold uppercase tracking-[0.2em]">Professional</p></div>
          <h1 className="text-5xl font-black italic leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.45rem]">Electrician<br /><span className="text-yellow-400">Booking</span></h1>
          <p className="mt-6 max-w-lg text-xl font-medium italic leading-8 text-slate-100 sm:text-2xl">Your Trusted Partner for Every <span className="font-bold text-yellow-400">Electrical</span> Solution.</p>

          <div className="mt-8 grid max-w-xl grid-cols-4 divide-x divide-white/20 border-y border-white/10 py-4">
            {benefits.map(({ icon: Icon, title, caption }) => <div className="flex flex-col items-center gap-2 px-1 text-center" key={title}><span className="grid size-11 place-items-center rounded-full border border-yellow-300/50 text-xl text-yellow-400"><Icon /></span><span className="text-xs font-bold leading-tight text-white sm:text-sm">{title}<br />{caption}</span></div>)}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-4 font-extrabold text-slate-950 shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5 hover:bg-yellow-300 sm:px-8" to="/booking"><FaClock aria-hidden="true" /> Book an Electrician <FaArrowRight aria-hidden="true" /></Link>
            <a className="inline-flex items-center gap-3 rounded-full border-2 border-white/80 px-6 py-4 font-bold text-white transition hover:bg-white/10" href="tel:+15550142020"><FaPhoneAlt aria-hidden="true" /> Call our team</a>
          </div>
        </div>

        <div className="relative -mx-5 mt-4 min-h-[390px] overflow-hidden sm:-mx-8 sm:min-h-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mt-0 lg:min-h-0 lg:w-[54%]">
          <img alt="ElectroFix electrician in safety gear, ready to help at your home" className="absolute inset-0 h-full w-full object-cover object-[48%_center]" src={technicianImage} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031532] via-[#031532]/20 to-transparent lg:from-[#031532] lg:via-[#031532]/10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#031532]/50 to-transparent lg:hidden" />
        </div>
      </div>
    </section>

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
