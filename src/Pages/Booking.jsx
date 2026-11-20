import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowRight, FaBolt, FaCalendarAlt, FaCalendarCheck, FaCheckCircle, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext.jsx'

const services = ['Electrical repairs', 'Lighting installation', 'Wiring & outlets', 'Fans & appliances', 'Safety inspection', 'Other']
const steps = ['Choose the service you need', 'Pick a date and convenient time', 'We’ll call to confirm your visit']

export default function Booking() {
  const [mapLocation, setMapLocation] = useState(null)
  const [locationStatus, setLocationStatus] = useState('')
  const [saveError, setSaveError] = useState('')
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function captureLocation() {
    if (!navigator.geolocation) {
      setLocationStatus('Location sharing is not available in this browser.')
      return
    }
    setLocationStatus('Finding your location…')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setMapLocation({ latitude: coords.latitude, longitude: coords.longitude, accuracy: Math.round(coords.accuracy) })
        setLocationStatus('Location added to your booking.')
      },
      () => setLocationStatus('We could not get your location. Check browser permissions or enter your address above.'),
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSaveError('')
    const booking = {
      ...Object.fromEntries(new FormData(event.currentTarget).entries()),
      id: `booking-${Date.now()}`,
      createdAt: new Date().toISOString(),
      accountEmail: user.email,
      mapLocation,
      status: 'pending',
      messages: [],
    }

    try {
      const saved = JSON.parse(localStorage.getItem('electrofix-bookings') || '[]')
      localStorage.setItem('electrofix-bookings', JSON.stringify([booking, ...(Array.isArray(saved) ? saved : [])]))
      navigate('/bookings', { state: { newBookingId: booking.id, bookingCompleted: true } })
    } catch {
      setSaveError('We could not save your request in this browser. Please try again or call our team.')
    }
  }

  return <>
    <section className="relative isolate overflow-hidden bg-[#031532] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_15%,rgba(0,102,255,0.42),transparent_45%)]" />
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6"><div><p className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300"><FaBolt /> Simple online booking</p><h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">Book a trusted <span className="text-yellow-400">electrician.</span></h1><p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Tell us what you need and when you’re available. We’ll take it from there.</p></div><a className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 font-bold text-white transition hover:bg-white/10" href="tel:+15550142020"><FaPhoneAlt className="text-yellow-400" /> Need urgent help? <span className="text-yellow-300">Call us</span></a></div>
    </section>

    <section className="bg-slate-50 px-5 py-10 sm:px-8 sm:py-14 lg:px-10"><div className="mx-auto max-w-7xl">
      {location.state?.registrationCompleted && <div className="mb-7 flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm" role="status"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-500 text-xl text-white"><FaCheckCircle /></span><div><h2 className="font-black text-emerald-900">Registration completed</h2><p className="mt-1 text-sm leading-6 text-emerald-800">Your account is ready. You can now request an electrician booking.</p></div></div>}
      <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr]">
      <aside className="flex flex-col gap-5"><div className="rounded-3xl bg-[#071a39] p-7 text-white shadow-xl shadow-blue-950/10 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">A few simple steps</p><h2 className="mt-3 text-2xl font-black">We make it easy.</h2><div className="mt-7 space-y-6">{steps.map((step, index) => <div className="flex items-center gap-4" key={step}><span className="grid size-10 shrink-0 place-items-center rounded-full bg-yellow-400 font-black text-slate-950">0{index + 1}</span><span className="text-sm font-medium leading-6 text-slate-200">{step}</span></div>)}</div><div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><FaShieldAlt className="mt-0.5 shrink-0 text-xl text-yellow-400" /><p className="text-sm leading-6 text-slate-300"><span className="font-bold text-white">Professional care, every visit.</span><br />We’ll discuss your request and confirm the details before scheduling.</p></div></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-yellow-300/30 text-lg text-amber-700"><FaClock /></span><div><h3 className="font-extrabold text-slate-900">Prefer to talk?</h3><p className="text-sm text-slate-500">Our team can help by phone.</p></div></div><a className="mt-5 inline-flex items-center gap-2 font-extrabold text-slate-900 hover:text-amber-700" href="tel:+15550142020">+1 (555) 014-2020 <FaArrowRight className="text-sm" /></a></div>
      </aside>

      <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9" onSubmit={handleSubmit}>
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-6"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-600">Appointment request</p><h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">Your service details</h2><p className="mt-2 text-sm text-slate-500">Fill out the form and we’ll contact you to confirm.</p></div><span className="hidden size-12 shrink-0 place-items-center rounded-2xl bg-yellow-400 text-xl text-slate-950 sm:grid"><FaCalendarAlt /></span></div>
        <div className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
          <label className="form-control sm:col-span-2"><span className="mb-2 text-sm font-bold text-slate-700">What service do you need?</span><select className="select select-bordered w-full bg-white text-slate-900" defaultValue="" name="service" required><option disabled value="">Choose a service</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
          <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Full name</span><input autoComplete="name" className="input input-bordered w-full bg-white text-slate-900 placeholder:text-slate-400" defaultValue={user?.name || ''} maxLength={80} name="name" placeholder="Alex Morgan" required /></label>
          <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Phone number</span><input autoComplete="tel" className="input input-bordered w-full bg-white text-slate-900 placeholder:text-slate-400" maxLength={32} name="phone" placeholder="(555) 123-4567" required type="tel" /></label>
          <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Email address</span><input autoComplete="email" className="input input-bordered w-full bg-white text-slate-900 placeholder:text-slate-400" defaultValue={user?.email || ''} maxLength={254} name="email" placeholder="alex@example.com" required type="email" /></label>
          <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Preferred date</span><input className="input input-bordered w-full bg-white text-slate-900" min={new Date().toISOString().slice(0, 10)} name="date" required type="date" /></label>
          <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Preferred time</span><select className="select select-bordered w-full bg-white text-slate-900" defaultValue="" name="time" required><option disabled value="">Choose a time</option><option value="morning">Morning · 8 AM–12 PM</option><option value="afternoon">Afternoon · 12 PM–4 PM</option><option value="evening">Evening · 4 PM–7 PM</option></select></label>
          <label className="form-control sm:col-span-2"><span className="mb-2 text-sm font-bold text-slate-700">Service address</span><input autoComplete="street-address" className="input input-bordered w-full bg-white text-slate-900 placeholder:text-slate-400" maxLength={250} name="address" placeholder="Street address" required /></label>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 sm:col-span-2"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan-200 text-blue-900"><FaMapMarkerAlt /></span><div><p className="font-extrabold text-slate-900">Add your map location <span className="font-medium text-slate-500">(optional)</span></p><p className="mt-1 text-xs leading-5 text-slate-600">Share your current location so the electrician can find the service address.</p></div></div><button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-sm font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100" onClick={captureLocation} type="button"><FaMapMarkerAlt /> {mapLocation ? 'Update location' : 'Use my location'}</button></div>{locationStatus && <p className="mt-3 text-sm font-semibold text-slate-700" role="status">{locationStatus}{mapLocation && <span className="mt-1 block font-mono text-xs text-slate-500">{mapLocation.latitude.toFixed(6)}, {mapLocation.longitude.toFixed(6)} · ±{mapLocation.accuracy} m</span>}</p>}</div>
          <label className="form-control sm:col-span-2"><span className="mb-2 text-sm font-bold text-slate-700">Tell us more <span className="font-normal text-slate-400">(optional)</span></span><textarea className="textarea textarea-bordered min-h-28 w-full bg-white text-slate-900 placeholder:text-slate-400" maxLength={2000} name="notes" placeholder="Describe the issue or add any helpful details..." /></label>
        </div>
        {saveError && <p className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-semibold text-rose-800" role="alert">{saveError}</p>}
        <button className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-extrabold text-slate-950 shadow-lg shadow-yellow-500/15 transition hover:-translate-y-0.5 hover:bg-yellow-300" type="submit">Request a booking <FaCalendarCheck /></button>
        <p className="mt-4 text-center text-xs text-slate-500">No payment required to request an appointment.</p>
      </form>
      </div>
    </div></section>
  </>
}
