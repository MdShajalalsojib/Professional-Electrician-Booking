import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaArrowRight,
  FaBolt,
  FaCalendarAlt,
  FaCheck,
  FaChevronRight,
  FaClock,
  FaPhoneAlt,
  FaShieldAlt,
  FaStar,
  FaTools,
} from 'react-icons/fa'
import Banner from '../Components/Banner/Banner.jsx'
import repairImage from '../Components/Services/assets/electrical-repair.jpg'
import lightingImage from '../Components/Services/assets/lighting-installation.jpg'
import inspectionImage from '../Components/Services/assets/safety-inspection.jpg'

const services = [
  { icon: FaBolt, number: '01', title: 'Repairs, made right.', category: 'ELECTRICAL REPAIR', image: repairImage, alt: 'Electrical repair work in progress', text: 'The lights flicker. An outlet stops working. We’ll help get your home back to normal.' },
  { icon: FaTools, number: '02', title: 'A brighter space.', category: 'LIGHTING & INSTALLATION', image: lightingImage, alt: 'Warm lighting in a finished home', text: 'Make room for better lighting, new fixtures, fans, and the little upgrades that change a room.' },
  { icon: FaShieldAlt, number: '03', title: 'Safety, checked.', category: 'HOME INSPECTION', image: inspectionImage, alt: 'Electrician inspecting home electrical equipment', text: 'Get a careful look at your electrical system and feel more confident about what’s behind the walls.' },
]

const reasons = [
  { icon: FaShieldAlt, title: 'Safety-led work', text: 'Careful attention to your home and the details that matter.' },
  { icon: FaClock, title: 'Your time matters', text: 'Choose a visit time that fits your day.' },
  { icon: FaPhoneAlt, title: 'A real conversation', text: 'Talk through the job with a friendly team.' },
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

    <section className="relative overflow-hidden bg-[#f4f7ff] px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-cyan-200/40 blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-8 size-80 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-xl"><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700"><span className="h-px w-8 bg-cyan-500" /> A better kind of home service</p><h2 className="mt-5 text-4xl font-black leading-[1.06] tracking-[-0.04em] text-[#10213a] sm:text-5xl">The right person.<br /><span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 bg-clip-text font-serif font-medium italic text-transparent">The right fix.</span></h2></div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-md leading-7 text-slate-600">Electrical work can feel like a lot. We make it simple to find capable help for the things that keep your home running.</p><Link className="inline-flex shrink-0 items-center gap-3 border-b-2 border-cyan-400 pb-2 text-sm font-extrabold text-[#10213a] transition hover:gap-5" to="/services">See what we can do <FaArrowRight className="text-blue-600" /></Link></div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, number, title, category, image, alt, text }, index) => <Link aria-label={`${title} Learn more`} className="group relative isolate flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[1.4rem] bg-[#10213a] p-6 text-white shadow-xl shadow-blue-950/15 transition duration-300 hover:-translate-y-2 sm:min-h-[480px] sm:p-7" key={number} to="/services">
            <img alt={alt} className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" src={image} />
            <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${index === 0 ? 'from-blue-950/30 via-blue-950/10 to-blue-950/95' : index === 1 ? 'from-fuchsia-950/30 via-purple-950/10 to-purple-950/95' : 'from-teal-950/30 via-teal-950/10 to-teal-950/95'}`} />
            <div className="flex items-start justify-between"><span className={`grid size-12 place-items-center rounded-2xl text-xl text-white shadow-lg ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-fuchsia-600' : 'bg-teal-500'}`}><Icon /></span><span className="rounded-full border border-white/30 bg-black/20 px-3 py-1 font-mono text-xs backdrop-blur-sm">/{number}</span></div>
            <div><p className={`text-[0.67rem] font-extrabold tracking-[0.2em] ${index === 0 ? 'text-cyan-300' : index === 1 ? 'text-fuchsia-300' : 'text-teal-200'}`}>{category}</p><h3 className="mt-3 text-3xl font-black leading-tight tracking-tight">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/85">{text}</p><span className="mt-6 inline-flex items-center gap-3 border-t border-white/25 pt-4 text-sm font-bold">Explore service <span className={`grid size-8 place-items-center rounded-full text-slate-950 transition group-hover:translate-x-1 ${index === 0 ? 'bg-cyan-300' : index === 1 ? 'bg-fuchsia-300' : 'bg-teal-300'}`}><FaArrowRight /></span></span></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-gradient-to-br from-[#10213a] via-[#172b63] to-[#083e55] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
      <div aria-hidden="true" className="absolute -right-24 -top-28 size-96 rounded-full border-[30px] border-cyan-300/10" /><div aria-hidden="true" className="absolute -right-8 -top-12 size-64 rounded-full border-[24px] border-fuchsia-300/10" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200"><span className="h-px w-8 bg-cyan-300" /> The ElectroFix difference</p><h2 className="mt-5 max-w-lg text-4xl font-black leading-[1.08] tracking-[-0.035em] sm:text-5xl">Good service should feel <span className="font-serif font-medium italic text-amber-300">good, too.</span></h2><p className="mt-5 max-w-md leading-7 text-slate-300">From the first hello to the final check, we want you to feel looked after in your own home.</p><Link className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 px-6 py-3.5 font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5" to="/about">Get to know us <FaArrowRight /></Link></div>
        <div className="divide-y divide-white/15 border-y border-white/15">{reasons.map(({ icon: Icon, title, text }, index) => <div className="flex items-center gap-5 py-6 sm:gap-7 sm:py-7" key={title}><span className={`font-serif text-3xl italic ${index === 0 ? 'text-cyan-200' : index === 1 ? 'text-fuchsia-200' : 'text-amber-200'}`}>0{index + 1}</span><span className={`grid size-12 shrink-0 place-items-center rounded-2xl text-lg text-white shadow-lg ${index === 0 ? 'bg-cyan-600' : index === 1 ? 'bg-fuchsia-600' : 'bg-amber-500'}`}><Icon /></span><span className="flex-1"><span className="block text-lg font-extrabold">{title}</span><span className="mt-1 block text-sm leading-6 text-slate-300">{text}</span></span><FaChevronRight aria-hidden="true" className="hidden text-sm text-cyan-200 sm:block" /></div>)}</div>
      </div>
    </section>

    <section className="bg-gradient-to-br from-[#fff8e8] via-[#fff] to-[#edfaff] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">Three simple steps</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#10213a] sm:text-4xl">Help is on the way.</h2></div><p className="max-w-md leading-7 text-slate-600">No complicated process. Just tell us what’s going on, and we’ll take it from there.</p></div>
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#e7e2d7] bg-white md:grid-cols-3">{[
          ['01', 'Pick a time', 'Choose a visit that works with your schedule.', FaCalendarAlt],
          ['02', 'Tell us the details', 'Share what you need help with when you book.', FaPhoneAlt],
          ['03', 'We’ll take it from here', 'Our team will confirm your appointment.', FaCheck],
        ].map(([number, title, text, Icon], index) => <article className={`relative p-7 transition hover:bg-blue-50/50 sm:p-8 ${index ? 'border-t border-[#e7e2d7] md:border-l md:border-t-0' : ''}`} key={number}><div className="flex items-center justify-between"><span className={`rounded-full px-3 py-1 font-mono text-xs font-black text-white ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-fuchsia-600' : 'bg-teal-600'}`}>STEP {number}</span><span className={`grid size-10 place-items-center rounded-xl ${index === 0 ? 'bg-blue-100 text-blue-700' : index === 1 ? 'bg-fuchsia-100 text-fuchsia-700' : 'bg-teal-100 text-teal-700'}`}><Icon /></span></div><h3 className="mt-8 text-xl font-extrabold text-[#10213a]">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></article>
        )}</div>
      </div>
    </section>

    <section className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24" id="reviews">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div><p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-700">A note from a customer</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] text-[#10213a]">The kind of service you remember.</h2><p className="mt-4 leading-7 text-slate-600">Good work is more than a quick fix. It’s clear communication and care for your home.</p></div>
        <figure className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#fef3c7] via-[#fff7ed] to-[#fce7f3] p-7 shadow-xl shadow-fuchsia-900/5 sm:p-10"><span aria-hidden="true" className="absolute -right-3 -top-10 font-serif text-[13rem] leading-none text-fuchsia-300/35">“</span><div className="relative flex gap-1 text-amber-500" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <FaStar key={index} />)}</div><blockquote className="relative mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-[#10213a] sm:text-3xl">“Quick, professional, and clear about what needed fixing. I’ll call ElectroFix again.”</blockquote><figcaption className="relative mt-7 flex items-center gap-3 border-t border-fuchsia-900/10 pt-5"><span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-fuchsia-600 font-black text-white">E</span><span><span className="block font-extrabold text-[#10213a]">ElectroFix customer</span><span className="mt-1 block text-sm text-slate-500">Home service customer</span></span><FaCheck aria-hidden="true" className="ml-auto text-teal-600" /></figcaption></figure>
      </div>
    </section>

    <section className="relative isolate overflow-hidden bg-gradient-to-r from-blue-700 via-violet-700 to-fuchsia-700 px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16"><div aria-hidden="true" className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, white 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, white 0 2px, transparent 3px)', backgroundSize: '42px 42px' }} /><div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Let’s get it sorted</p><h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">Your home deserves an electrician you feel good about.</h2></div><Link className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-amber-300 px-7 py-4 font-extrabold text-slate-950 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-amber-200" to="/booking">Book a visit <FaArrowRight /></Link></div></section>
  </>
}
