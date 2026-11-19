import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBolt,
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaFan,
  FaHome,
  FaLightbulb,
  FaPlug,
  FaQuoteLeft,
  FaShieldAlt,
  FaStar,
  FaTools,
} from 'react-icons/fa'
import installationPhoto from '../Components/Services/assets/wiring-installation.jpg'
import repairPhoto from '../Components/Services/assets/electrical-repair.jpg'
import houseWiringPhoto from '../Components/Services/assets/house-wiring.jpg'
import lightingPhoto from '../Components/Services/assets/lighting-installation.jpg'
import homeServicePhoto from '../Components/Services/assets/appliance-service.jpg'
import fanPhoto from '../Components/Services/assets/ceiling-fan.jpg'
import circuitPhoto from '../Components/Services/assets/circuit-solutions.jpg'
import safetyPhoto from '../Components/Services/assets/safety-inspection.jpg'

const services = [
  { title: 'Electrical Installation', detail: 'Professional installation for homes and offices.', icon: FaHome, image: installationPhoto, alt: 'Electrician installing electrical wiring', credit: 'Audy of Course', photoUrl: 'https://www.pexels.com/photo/a-female-electrician-standing-on-a-ladder-and-holding-cables-20500461/' },
  { title: 'Electrical Repair', detail: 'Quick and reliable repairs for your home.', icon: FaTools, image: repairPhoto, alt: 'Electrician repairing an electrical panel', credit: 'Ranjeet', photoUrl: 'https://www.pexels.com/photo/a-man-is-working-on-an-electrical-panel-27928761/' },
  { title: 'House Wiring', detail: 'Safe, organized wiring built to last.', icon: FaPlug, image: houseWiringPhoto, alt: 'Electrical wires exposed during home wiring work', credit: 'La Miko', photoUrl: 'https://www.pexels.com/photo/photo-of-electrical-wires-3616772/' },
  { title: 'Lighting Installation', detail: 'Modern lighting solutions for every space.', icon: FaLightbulb, image: lightingPhoto, alt: 'Electrician fitting a ceiling light', credit: 'Anete Lusina', photoUrl: 'https://www.pexels.com/photo/man-screwing-light-bulb-into-lamp-4792521/' },
  { title: 'Home Electrical Service', detail: 'Complete electrical care for your home.', icon: FaHome, image: homeServicePhoto, alt: 'Technician repairing a household appliance', credit: 'Bulat843', photoUrl: 'https://www.pexels.com/photo/technician-repairing-home-appliance-indoors-34734504/' },
  { title: 'Fan & Appliance Service', detail: 'Installation and maintenance for fans and appliances.', icon: FaFan, image: fanPhoto, alt: 'Ceiling fan installed in a home', credit: 'Pexels contributor', photoUrl: 'https://www.pexels.com/photo/fan-on-ceiling-9257922/' },
  { title: 'Power & Circuit Solutions', detail: 'Reliable power distribution and circuit solutions.', icon: FaBolt, image: circuitPhoto, alt: 'Technician working with electrical circuits', credit: 'Bulat843', photoUrl: 'https://www.pexels.com/photo/man-working-on-electronics-wiring-in-workshop-37340074/' },
  { title: 'Electrical Safety Inspection', detail: 'Detailed checks for your protection and peace of mind.', icon: FaShieldAlt, image: safetyPhoto, alt: 'Technicians inspecting an electrical system', credit: 'Annas Zakaria', photoUrl: 'https://www.pexels.com/photo/electricians-at-work-10871585/' },
]

const reasons = [
  { icon: FaBolt, title: 'Expert technicians' },
  { icon: FaShieldAlt, title: 'Safety first' },
  { icon: FaStar, title: 'Fair pricing' },
  { icon: FaClock, title: 'On-time service' },
]

export default function Services() {
  return <>
    <section className="relative isolate overflow-hidden bg-[#031532] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_70%_45%,rgba(0,100,255,0.34),transparent_54%),linear-gradient(110deg,#031532_8%,#062553_67%,#031532)]" />
      <div className="relative mx-auto grid min-h-[440px] max-w-7xl items-center px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="relative z-20 py-10 lg:py-12">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-blue-100"><Link className="hover:text-yellow-300" to="/">⌂ Home</Link><span className="text-blue-300">›</span><span className="text-yellow-300">Services</span></div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">Professional service</p>
          <h1 className="mt-3 max-w-xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">Our Professional<br /><span className="text-yellow-400">Electrical</span> Services</h1>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-200">Reliable, safe, and affordable electrical solutions for homes, businesses, and industries.</p>
          <div className="mt-6 flex flex-wrap gap-3"><Link className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-300" to="/booking"><FaCalendarAlt /> Book a service <FaArrowRight /></Link><a className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10" href="#services"><FaBolt className="text-yellow-300" /> Explore services</a></div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-200"><span className="inline-flex items-center gap-1.5"><FaShieldAlt className="text-yellow-400" /> Safety focused</span><span className="inline-flex items-center gap-1.5"><FaClock className="text-yellow-400" /> Flexible booking</span><span className="inline-flex items-center gap-1.5"><FaStar className="text-yellow-400" /> Skilled professionals</span></div>
        </div>
        <div className="relative -mx-5 min-h-[300px] overflow-hidden sm:-mx-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:min-h-0 lg:w-[53%]">
          <img alt="Electrician carefully working on a home electrical panel" className="absolute inset-0 h-full w-full object-cover object-center" src={repairPhoto} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031532] via-[#031532]/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031532]/35 to-transparent" />
          <div aria-hidden="true" className="absolute -left-5 top-[-10%] hidden h-[120%] w-14 -skew-x-[18deg] bg-yellow-400 lg:block" />
          <div className="absolute bottom-5 left-6 flex items-center gap-3 rounded-full border border-yellow-300/50 bg-[#061a3a]/90 px-4 py-2.5 shadow-xl backdrop-blur sm:bottom-7 sm:left-10"><span className="grid size-10 place-items-center rounded-full bg-yellow-400 text-slate-950"><FaBolt /></span><span className="text-xs font-bold leading-tight">ElectroFix<br /><span className="font-medium text-yellow-300">Professional service</span></span></div>
        </div>
      </div>
    </section>

    <section className="bg-[linear-gradient(180deg,#f8fafc,#edf4ff)] px-5 py-11 sm:px-8 sm:py-14 lg:px-10" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500"><span className="h-px w-10 bg-yellow-400" /> Our services <span className="h-px w-10 bg-yellow-400" /></div>
        <div className="mt-2 text-center"><h2 className="text-3xl font-black text-[#071a39] sm:text-4xl">Complete <span className="text-amber-500">Electrical</span> Solutions</h2><p className="mt-2 text-sm text-slate-600 sm:text-base">From installation to maintenance, we’ve got you covered.</p></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, detail, icon: Icon, image, alt, credit, photoUrl }) => <article className="group flex min-h-32 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_5px_18px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl" key={title}>
            <a aria-label={`Photo by ${credit} on Pexels`} className="relative h-24 w-[38%] shrink-0 overflow-hidden rounded-xl bg-slate-200" href={photoUrl} rel="noreferrer" target="_blank"><img alt={alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src={image} /><span className="absolute inset-x-0 bottom-0 truncate bg-slate-950/55 px-1.5 py-1 text-center text-[8px] font-medium text-white">Photo: {credit}</span></a>
            <div className="min-w-0 flex-1 py-1"><div className="flex items-start justify-between gap-1"><h3 className="text-sm font-extrabold leading-tight text-[#071a39] sm:text-[15px]">{title}</h3><span className="grid size-8 shrink-0 place-items-center rounded-full bg-yellow-400 text-sm text-slate-950 transition group-hover:rotate-6 group-hover:bg-yellow-300"><Icon /></span></div><p className="mt-1.5 line-clamp-2 text-[11px] leading-4 text-slate-600">{detail}</p><Link className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-extrabold text-blue-900 hover:text-amber-700" to="/booking">Learn more <FaArrowRight className="text-[9px]" /></Link></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="overflow-hidden bg-[#031532] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_1.1fr_1.2fr] lg:items-center">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">Why choose ElectroFix?</p><h2 className="mt-2 text-2xl font-black">Good work. Good people.</h2><p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">We’re committed to dependable service, careful workmanship, and a clear experience from start to finish.</p><div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">{reasons.map(({ icon: Icon, title }) => <div className="flex items-center gap-2 text-xs font-bold text-slate-100" key={title}><Icon className="shrink-0 text-yellow-400" />{title}</div>)}</div><Link className="mt-5 inline-flex items-center gap-2 rounded-full border border-yellow-400 px-4 py-2 text-xs font-bold text-yellow-300 transition hover:bg-yellow-400 hover:text-slate-950" to="/about">Learn more <FaArrowRight /></Link></div>

        <div className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-7"><FaQuoteLeft className="text-2xl text-yellow-400" /><p className="mt-3 text-base font-semibold leading-7 text-white">Careful work, honest communication, and respect for your home—that’s the ElectroFix service promise.</p><div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4"><span className="grid size-10 place-items-center rounded-full bg-yellow-400 text-lg text-slate-950"><FaBolt /></span><div><p className="text-sm font-bold">The ElectroFix team</p><p className="text-xs text-slate-400">Your trusted electrical partner</p></div><div aria-label="5 star service" className="ml-auto flex gap-0.5 text-xs text-yellow-400">{Array.from({ length: 5 }, (_, index) => <FaStar key={index} />)}</div></div></div>

        <div className="relative overflow-hidden rounded-2xl border border-yellow-400/80 bg-gradient-to-br from-[#0c2c5b] to-[#06152f] p-6 sm:p-7"><div aria-hidden="true" className="absolute -right-5 -top-8 text-[150px] text-white/[0.04]"><FaHome /></div><div className="relative"><p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-300">Need professional help?</p><h2 className="mt-2 text-2xl font-black leading-tight">Book your electrician today.</h2><p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">Get fast, reliable service at a time that works for you.</p><Link className="mt-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300" to="/booking"><FaCalendarAlt /> Book now <FaArrowRight /></Link></div></div>
      </div>
    </section>
  </>
}
