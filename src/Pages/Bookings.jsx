import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaArrowRight, FaBolt, FaCalendarAlt, FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaReply, FaTools } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext.jsx'

function getBookings() {
  try {
    const bookings = JSON.parse(localStorage.getItem('electrofix-bookings') || '[]')
    return Array.isArray(bookings) ? bookings : []
  } catch {
    return []
  }
}

function getMapUrl(booking) {
  const query = booking.mapLocation ? `${booking.mapLocation.latitude},${booking.mapLocation.longitude}` : booking.address
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || '')}`
}

function formatDate(date) {
  if (!date) return 'Date not provided'
  return new Date(`${date}T12:00:00`).toLocaleDateString(undefined, { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })
}

const statusStyles = {
  pending: 'bg-amber-100 text-amber-900',
  confirmed: 'bg-cyan-100 text-cyan-900',
  'in progress': 'bg-blue-100 text-blue-900',
  completed: 'bg-emerald-100 text-emerald-900',
  declined: 'bg-rose-100 text-rose-900',
}

export default function Bookings() {
  const location = useLocation()
  const { user } = useAuth()
  const [bookings, setBookings] = useState(getBookings)
  const visibleBookings = user?.isAdmin ? bookings : bookings.filter((booking) => booking.accountEmail?.toLowerCase() === user?.email?.toLowerCase())

  function saveBookings(nextBookings) {
    localStorage.setItem('electrofix-bookings', JSON.stringify(nextBookings))
    setBookings(nextBookings)
  }

  function updateStatus(id, status) {
    saveBookings(bookings.map((booking) => booking.id === id ? { ...booking, status, updatedAt: new Date().toISOString() } : booking))
  }

  function sendReply(event, booking) {
    event.preventDefault()
    const form = event.currentTarget
    const message = new FormData(form).get('reply')?.toString().trim()
    if (!message) return
    const reply = {
      id: `message-${Date.now()}`,
      sender: user?.isAdmin ? 'admin' : 'customer',
      senderName: user?.name || 'ElectroFix team',
      text: message,
      sentAt: new Date().toISOString(),
    }
    saveBookings(bookings.map((item) => item.id === booking.id ? { ...item, messages: [...(item.messages || []), reply] } : item))
    form.reset()
  }

  const title = user?.isAdmin ? 'Manage booking requests' : 'My booking requests'

  return <main className="min-h-[65vh] bg-[#f2f5ff] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-800"><FaBolt className="text-amber-500" /> {user?.isAdmin ? 'Admin dashboard' : 'Customer dashboard'}</p><h1 className="mt-4 text-3xl font-black tracking-tight text-[#10213a] sm:text-4xl">{title}</h1><p className="mt-2 max-w-2xl leading-7 text-slate-600">{user?.isAdmin ? 'Review new requests, update appointment status, and reply to customers.' : 'Track your request and continue the conversation with the ElectroFix team.'}</p></div>{!user?.isAdmin && <Link className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 font-extrabold text-white shadow-lg shadow-blue-700/15 transition hover:bg-violet-700" to="/booking">New booking <FaArrowRight /></Link>}</div>

      {location.state?.registrationCompleted && <div className="mt-7 flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5" role="status"><FaCheckCircle className="mt-0.5 shrink-0 text-2xl text-emerald-600" /><div><h2 className="font-black text-emerald-900">Registration completed</h2><p className="mt-1 text-sm text-emerald-800">Your account is ready. You can review your booking requests below.</p></div></div>}
      {location.state?.bookingCompleted && <div className="mt-7 flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm" role="status"><FaCheckCircle className="mt-0.5 shrink-0 text-2xl text-emerald-600" /><div><h2 className="font-black text-emerald-900">Booking request received</h2><p className="mt-1 text-sm leading-6 text-emerald-800">Your request is saved below. The service team will need to contact you to confirm the appointment.</p></div></div>}
      <p className="mt-7 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">Demo workspace: messages and booking updates are stored in this browser. A shared backend is needed for live communication between different devices.</p>

      {visibleBookings.length === 0 ? <section className="mt-8 rounded-3xl border border-dashed border-blue-200 bg-white px-6 py-16 text-center"><span className="mx-auto grid size-14 place-items-center rounded-2xl bg-blue-100 text-2xl text-blue-700"><FaCalendarAlt /></span><h2 className="mt-5 text-xl font-black text-[#10213a]">No bookings yet</h2><p className="mx-auto mt-2 max-w-md leading-6 text-slate-600">{user?.isAdmin ? 'Customer requests will appear here when they book a service.' : 'Your requests will appear here with appointment details and replies from the service team.'}</p>{!user?.isAdmin && <Link className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-bold text-white hover:bg-violet-700" to="/booking">Create a booking <FaArrowRight /></Link>}</section> : <div className="mt-8 space-y-6">{visibleBookings.map((booking) => {
        const status = booking.status || 'pending'
        return <article className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg shadow-blue-950/[0.05]" key={booking.id}>
          <div className="flex flex-col justify-between gap-3 bg-linear-to-r from-blue-800 via-blue-700 to-violet-700 px-6 py-5 text-white sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">{booking.service}</p><h2 className="mt-1 text-xl font-black">{booking.name}</h2>{user?.isAdmin && <p className="mt-1 text-sm text-blue-100">Customer account: {booking.accountEmail}</p>}</div><div className="flex flex-wrap items-center gap-2"><span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold"><FaCalendarAlt className="text-amber-300" /> {formatDate(booking.date)} · {booking.time}</span><span className={`rounded-full px-3 py-2 text-xs font-black capitalize ${statusStyles[status] || statusStyles.pending}`}>{status}</span></div></div>
          <div className="grid gap-6 p-6 md:grid-cols-[1fr_1fr_auto] md:items-center"><div className="space-y-3"><p className="flex items-center gap-3 text-sm text-slate-700"><FaEnvelope className="shrink-0 text-violet-600" /><a className="break-all font-semibold hover:text-blue-700" href={`mailto:${booking.email}`}>{booking.email}</a></p><p className="flex items-center gap-3 text-sm text-slate-700"><FaPhoneAlt className="shrink-0 text-blue-600" /><a className="font-semibold hover:text-blue-700" href={`tel:${booking.phone}`}>{booking.phone}</a></p></div><div><p className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-800"><FaMapMarkerAlt className="mt-1 shrink-0 text-rose-500" />{booking.address}</p>{booking.mapLocation && <p className="ml-6 mt-2 font-mono text-xs text-slate-500">GPS {booking.mapLocation.latitude.toFixed(6)}, {booking.mapLocation.longitude.toFixed(6)} · ±{booking.mapLocation.accuracy} m</p>}</div><a className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-100 px-5 py-3 text-sm font-extrabold text-blue-900 transition hover:bg-cyan-200" href={getMapUrl(booking)} rel="noreferrer" target="_blank"><FaMapMarkerAlt /> Open in Google Maps <FaArrowRight /></a></div>
          {booking.notes && <div className="border-t border-slate-100 bg-slate-50 px-6 py-4"><p className="text-xs font-black uppercase tracking-wider text-slate-500">Customer notes</p><p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-700">{booking.notes}</p></div>}

          <div className="border-t border-slate-100 px-6 py-5"><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="flex items-center gap-2 font-black text-[#10213a]"><FaReply className="text-violet-600" /> Conversation <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{booking.messages?.length || 0}</span></h3>{user?.isAdmin && <label className="flex items-center gap-2 text-xs font-bold text-slate-600">Update status<select className="select select-bordered select-sm bg-white text-slate-900" onChange={(event) => updateStatus(booking.id, event.target.value)} value={status}><option value="pending">Pending</option><option value="confirmed">Confirmed</option><option value="in progress">In progress</option><option value="completed">Completed</option><option value="declined">Declined</option></select></label>}</div>
            {booking.messages?.length > 0 && <div className="mt-4 space-y-3">{booking.messages.map((message) => <div className={`max-w-2xl rounded-2xl p-4 ${message.sender === 'admin' ? 'bg-blue-50' : 'ml-auto bg-violet-50'}`} key={message.id}><div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-black text-slate-800">{message.sender === 'admin' ? 'ElectroFix team' : message.senderName}</p><time className="text-[11px] text-slate-500">{new Date(message.sentAt).toLocaleString()}</time></div><p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">{message.text}</p></div>)}</div>}
            <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => sendReply(event, booking)}><label className="sr-only" htmlFor={`reply-${booking.id}`}>Write a reply</label><textarea className="textarea textarea-bordered min-h-14 flex-1 bg-white text-slate-900" id={`reply-${booking.id}`} maxLength={1500} name="reply" placeholder={user?.isAdmin ? 'Write a reply to the customer…' : 'Reply to the ElectroFix team…'} required /><button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-violet-700" type="submit"><FaReply /> Send reply</button></form>
          </div>
        </article>
      })}</div>}
    </div>
  </main>
}
