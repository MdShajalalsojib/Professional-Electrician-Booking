import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBolt,
  FaCheck,
  FaClock,
  FaHandshake,
  FaHeart,
  FaShieldAlt,
  FaTools,
} from 'react-icons/fa'
import repairPhoto from '../Components/Services/assets/electrical-repair.jpg'
import teamPhoto from '../Components/About/assets/electrician-team.jpg'

const values = [
  {
    icon: FaShieldAlt,
    title: 'Safety comes first',
    description: 'We take the time to work carefully and keep your home and family in mind.',
  },
  {
    icon: FaTools,
    title: 'Pride in our craft',
    description: 'We focus on thoughtful workmanship and explain what the job needs.',
  },
  {
    icon: FaHeart,
    title: 'People matter',
    description: 'Friendly communication and respect for your space are part of every visit.',
  },
]

export default function About() {
  return <main className="overflow-hidden bg-white text-slate-900">
    <section className="relative isolate bg-[#031532] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_80%_15%,rgba(0,102,255,0.32),transparent_42%),radial-gradient(ellipse_at_15%_90%,rgba(250,204,21,0.09),transparent_38%),linear-gradient(115deg,#03132d,#062550_64%,#03132d)]" />
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300"><FaBolt /> About ElectroFix</p>
          <h1 className="mt-6 text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.4rem]">Electrical care you can <span className="text-yellow-400">count on.</span></h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">We make it easier to find professional electrical help—with safe, thoughtful service and a team that treats your home with care.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-4 font-extrabold text-slate-950 shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5 hover:bg-yellow-300" to="/booking">Book a service <FaArrowRight /></Link><Link className="rounded-full border border-white/25 px-6 py-4 font-bold text-white transition hover:bg-white/10" to="/services">Explore our services</Link></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-300"><span className="inline-flex items-center gap-2"><FaCheck className="text-yellow-400" /> Clear communication</span><span className="inline-flex items-center gap-2"><FaCheck className="text-yellow-400" /> Careful workmanship</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl shadow-black/40">
            <img alt="Electrician carefully repairing an electrical panel" className="h-[340px] w-full object-cover sm:h-[430px]" src={repairPhoto} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03132d]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 sm:p-8"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-300">The ElectroFix promise</p><p className="mt-1 text-xl font-extrabold text-white sm:text-2xl">Professional, from start to finish.</p></div><span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-yellow-400 text-xl text-slate-950"><FaShieldAlt /></span></div>
          </div>
          <div className="absolute -left-4 top-10 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0b2144] px-4 py-3 shadow-xl sm:flex"><span className="grid size-10 place-items-center rounded-xl bg-yellow-400 text-slate-950"><FaBolt /></span><div><p className="text-sm font-extrabold">Here when you need us</p><p className="text-xs text-slate-400">Local service, personal care</p></div></div>
        </div>
      </div>
    </section>

    <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-[2rem] bg-yellow-300/60" />
        <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-slate-900/10"><img alt="Two technicians collaborating on electrical work" className="h-[330px] w-full object-cover sm:h-[420px]" loading="lazy" src={teamPhoto} /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" /><div className="absolute bottom-0 left-0 p-6 text-white"><p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-300">Our story</p><p className="mt-1 text-xl font-extrabold">A team built around care.</p></div></div>
        </div>
        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.16em] text-amber-600"><span className="h-0.5 w-8 bg-yellow-400" /> Who we are</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#071a39] sm:text-5xl">Making electrical service feel <span className="text-blue-800">simple.</span></h2>
          <p className="mt-6 text-base leading-8 text-slate-600">ElectroFix connects homes and businesses with professional electricians for the work that keeps everyday life running. We believe good service starts with listening and ends with a job done with care.</p>
          <p className="mt-4 text-base leading-8 text-slate-600">From the first conversation to the final check, we keep you informed, treat your space respectfully, and make the next step clear.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"><span className="grid size-10 place-items-center rounded-xl bg-yellow-300/40 text-lg text-amber-700"><FaHandshake /></span><div><p className="text-sm font-extrabold text-slate-900">Straightforward</p><p className="text-xs text-slate-500">Honest conversations</p></div></div><div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"><span className="grid size-10 place-items-center rounded-xl bg-blue-100 text-lg text-blue-800"><FaClock /></span><div><p className="text-sm font-extrabold text-slate-900">Considerate</p><p className="text-xs text-slate-500">Your time matters</p></div></div></div>
        </div>
      </div>
    </section>

    <section className="bg-[#f4f7fc] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-extrabold uppercase tracking-[0.16em] text-amber-600">What guides us</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#071a39] sm:text-4xl">The values behind every visit.</h2><p className="mt-4 leading-7 text-slate-600">A dependable experience comes from getting the important things right, every time.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, description }, index) => <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 sm:p-8" key={title}><span className="absolute right-5 top-3 text-6xl font-black text-slate-100">0{index + 1}</span><span className="relative grid size-14 place-items-center rounded-2xl bg-[#071a39] text-2xl text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-slate-950"><Icon /></span><h3 className="relative mt-6 text-xl font-extrabold text-slate-900">{title}</h3><p className="relative mt-3 leading-7 text-slate-600">{description}</p></article>)}</div>
      </div>
    </section>

    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#031532] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(0,102,255,0.35),transparent_50%)]" /><div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-yellow-300">Ready when you are</p><h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">Let’s take care of your electrical needs.</h2><p className="mt-3 text-slate-300">Talk with our team and find the right service for your home.</p></div><Link className="inline-flex shrink-0 items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-yellow-300" to="/booking">Book a service <FaArrowRight /></Link></div></div></section>
  </main>
}
