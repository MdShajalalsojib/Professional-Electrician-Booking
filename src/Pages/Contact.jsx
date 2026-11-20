import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBolt, FaCalendarAlt, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const contactOptions = [
  { icon: FaPhoneAlt, title: 'Call our team', detail: '+1 (555) 014-2020', href: 'tel:+15550142020', iconStyle: 'bg-amber-300 text-amber-950', cardStyle: 'border-amber-200 bg-amber-50/80' },
  { icon: FaEnvelope, title: 'Email us', detail: 'hello@electrofix.example', href: 'mailto:hello@electrofix.example', iconStyle: 'bg-fuchsia-500 text-white', cardStyle: 'border-fuchsia-200 bg-fuchsia-50/70' },
  { icon: FaMapMarkerAlt, title: 'Service area', detail: 'Local homes and businesses', href: null, iconStyle: 'bg-cyan-400 text-cyan-950', cardStyle: 'border-cyan-200 bg-cyan-50/80' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return <main className="relative isolate overflow-hidden bg-[#f2f5ff] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
    <div aria-hidden="true" className="absolute -right-24 top-16 -z-10 size-80 rounded-full bg-cyan-200/40 blur-3xl" />
    <div aria-hidden="true" className="absolute -left-28 bottom-0 -z-10 size-80 rounded-full bg-fuchsia-200/35 blur-3xl" />
    <div className="mx-auto max-w-7xl">
      <div className="max-w-2xl"><p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700 shadow-sm"><FaBolt className="text-amber-500" /> Contact us</p><h1 className="mt-4 text-4xl font-black tracking-tight text-[#10213a] sm:text-5xl">We’re here to <span className="text-blue-700">help.</span></h1><p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Have a question or need help choosing a service? Send us a message and we’ll point you in the right direction.</p></div>

      <div className="mt-9 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
        <section aria-label="Contact information" className="space-y-4">
          <h2 className="mb-5 text-sm font-black uppercase tracking-[0.16em] text-slate-500">Reach out your way</h2>
          {contactOptions.map(({ icon: Icon, title, detail, href, iconStyle, cardStyle }) => <article className={`flex items-center gap-4 rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${cardStyle}`} key={title}><span className={`grid size-12 shrink-0 place-items-center rounded-xl text-lg shadow-sm ${iconStyle}`}><Icon /></span><div className="min-w-0"><p className="font-extrabold text-[#10213a]">{title}</p>{href ? <a className="mt-1 block truncate text-sm font-semibold text-slate-600 transition hover:text-blue-700" href={href}>{detail}</a> : <p className="mt-1 text-sm font-semibold text-slate-600">{detail}</p>}</div></article>)}
          <div className="rounded-2xl bg-[#10213a] p-5 text-white shadow-lg shadow-blue-950/10"><div className="flex items-start gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan-300 text-blue-950"><FaClock /></span><p className="text-sm leading-6 text-slate-200"><span className="font-extrabold text-white">Need service soon?</span><br />Request an appointment online for a time that works for you.</p></div><Link className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-amber-300 transition hover:gap-3" to="/booking">Book a service <FaArrowRight /></Link></div>
        </section>

        <form className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-950/[0.07]" onSubmit={handleSubmit}>
          <div className="border-b border-blue-100 bg-linear-to-r from-blue-50 via-violet-50 to-fuchsia-50 px-6 py-6 sm:px-8"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">Send us a message</p><h2 className="mt-2 text-2xl font-black text-[#10213a] sm:text-3xl">How can we help?</h2><p className="mt-2 text-sm leading-6 text-slate-600">Share a few details and our team will be in touch.</p></div>
          <div className="p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2"><label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Your name</span><input autoComplete="name" className="input input-bordered w-full border-slate-200 bg-slate-50 text-slate-900 transition focus:border-blue-400 focus:bg-white" maxLength={80} name="name" placeholder="Alex Morgan" required /></label><label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Email address</span><input autoComplete="email" className="input input-bordered w-full border-slate-200 bg-slate-50 text-slate-900 transition focus:border-blue-400 focus:bg-white" maxLength={254} name="email" placeholder="alex@example.com" required type="email" /></label></div>
            <label className="form-control mt-5"><span className="mb-2 text-sm font-bold text-slate-700">How can we help?</span><textarea className="textarea textarea-bordered min-h-36 w-full border-slate-200 bg-slate-50 text-slate-900 transition focus:border-blue-400 focus:bg-white" maxLength={2000} name="message" placeholder="Tell us a little about what you need..." required /></label>
            {sent && <p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-800" role="status">Thanks! Your message is ready. Our team will be in touch.</p>}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-7 py-4 font-extrabold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-violet-700" type="submit">Send message <FaArrowRight /></button><p className="text-xs text-slate-400">Demo form: connect a backend to deliver messages.</p></div>
          </div>
        </form>
      </div>
    </div>
  </main>
}
