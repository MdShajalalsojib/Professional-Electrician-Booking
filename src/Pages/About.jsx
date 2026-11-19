import { Link } from 'react-router-dom'
import { FaCheckCircle, FaHeart, FaShieldAlt, FaStar, FaUsers } from 'react-icons/fa'

const values = [
  { icon: FaShieldAlt, title: 'Safety comes first', text: 'We approach every job with care, clear communication, and respect for your home.' },
  { icon: FaHeart, title: 'People over problems', text: 'We take time to listen, explain the options, and make the experience straightforward.' },
  { icon: FaStar, title: 'Quality you can feel', text: 'Thoughtful workmanship and dependable service are at the heart of what we do.' },
]

export default function About() {
  return <>
    <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"><div><p className="font-bold uppercase tracking-[0.18em] text-yellow-400">About ElectroFix</p><h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">A little more peace of mind, with every visit.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">We connect households with skilled electrical professionals who care about doing the job safely and treating people well.</p><Link className="mt-8 inline-flex rounded-full bg-yellow-400 px-7 py-4 font-extrabold text-slate-950 hover:bg-yellow-300" to="/booking">Meet your electrician</Link></div><div className="grid grid-cols-2 gap-4"><div className="rounded-3xl bg-slate-800 p-7"><FaUsers className="text-3xl text-yellow-400" /><p className="mt-8 text-4xl font-black">250+</p><p className="mt-2 text-slate-300">happy customers</p></div><div className="mt-10 rounded-3xl bg-yellow-400 p-7 text-slate-950"><FaStar className="text-3xl" /><p className="mt-8 text-4xl font-black">4.9/5</p><p className="mt-2 text-slate-800">average rating</p></div><div className="col-span-2 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-950 to-slate-800 p-7"><p className="text-2xl font-black">Your Trusted Partner for Every Electrical Solution.</p><p className="mt-2 text-slate-300">Local service. Professional standards.</p></div></div></div></section>
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="font-bold uppercase tracking-[0.16em] text-amber-600">What guides us</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Good service is built on trust.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <article className="rounded-3xl border border-slate-200 p-7" key={title}><Icon className="text-3xl text-amber-500" /><h3 className="mt-5 text-xl font-extrabold text-slate-900">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p><FaCheckCircle className="mt-6 text-emerald-500" /></article>)}</div></div></section>
  </>
}
