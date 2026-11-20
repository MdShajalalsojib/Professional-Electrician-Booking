import { useRef, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { FaBolt, FaLock, FaUser } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function Account() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, login, register } = useAuth()
  const isRegister = location.pathname === '/register'
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const authInProgress = useRef(false)

  if (user && !authInProgress.current) return <Navigate replace to={location.state?.from?.pathname || '/'} />

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setBusy(true)
    authInProgress.current = true
    const form = new FormData(event.currentTarget)
    try {
      if (isRegister) {
        if (form.get('password') !== form.get('confirmPassword')) throw new Error('Your passwords do not match.')
        await register({ name: form.get('name'), email: form.get('email'), password: form.get('password') })
      } else {
        await login({ email: form.get('email'), password: form.get('password') })
      }
      navigate(location.state?.from?.pathname || '/booking', {
        replace: true,
        state: isRegister ? { registrationCompleted: true } : undefined,
      })
    } catch (submissionError) {
      setError(submissionError.message || 'Something went wrong. Please try again.')
    } finally {
      setBusy(false)
      authInProgress.current = false
    }
  }

  return <main className="relative isolate grid min-h-[calc(100vh-5rem)] place-items-center overflow-hidden bg-[#f3f6ff] px-5 py-12 sm:px-8">
    <div aria-hidden="true" className="absolute -left-24 top-10 -z-10 size-80 rounded-full bg-cyan-200/50 blur-3xl" /><div aria-hidden="true" className="absolute -bottom-24 -right-16 -z-10 size-96 rounded-full bg-fuchsia-200/50 blur-3xl" />
    <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-blue-950/10 lg:grid-cols-[0.9fr_1.1fr]">
      <aside className="relative hidden overflow-hidden bg-gradient-to-br from-[#10213a] via-blue-800 to-violet-700 p-10 text-white lg:flex lg:flex-col lg:justify-between"><div aria-hidden="true" className="absolute -bottom-24 -right-20 size-80 rounded-full border-[32px] border-white/10" /><div><Link className="inline-flex items-center gap-2 text-xl font-black" to="/"><FaBolt className="text-amber-300" /> Electro<span className="text-amber-300">Fix</span></Link><p className="mt-20 max-w-sm text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Powering your life</p><h1 className="mt-4 text-5xl font-black leading-tight">Good help is one step away.</h1><p className="mt-5 max-w-sm leading-7 text-blue-100">Create an account to book a visit and keep your service details together.</p></div><p className="relative text-sm text-blue-100">Electrical care, made easier.</p></aside>
      <section className="p-7 sm:p-10 lg:p-12">
        <div className="mb-8 flex items-center gap-2 text-sm font-bold text-blue-700 lg:hidden"><FaBolt className="text-amber-500" /> ElectroFix</div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">{isRegister ? 'Create your account' : 'Welcome back'}</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">{isRegister ? 'Join ElectroFix' : 'Sign in to continue'}</h2>
        <p className="mt-3 leading-7 text-slate-600">{isRegister ? 'Register to request and manage your electrician bookings.' : 'Sign in to continue to your booking.'}</p>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {isRegister && <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Full name</span><span className="relative"><FaUser aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input autoComplete="name" className="input input-bordered w-full bg-white pl-11 text-slate-900" maxLength={80} name="name" placeholder="Your name" required /></span></label>}
          <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Email address</span><input autoComplete="email" className="input input-bordered w-full bg-white text-slate-900" maxLength={254} name="email" placeholder="you@example.com" required type="email" /></label>
          <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Password</span><span className="relative"><FaLock aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input autoComplete={isRegister ? 'new-password' : 'current-password'} className="input input-bordered w-full bg-white pl-11 text-slate-900" minLength={8} name="password" placeholder={isRegister ? 'At least 8 characters' : 'Your password'} required type="password" /></span></label>
          {isRegister && <label className="form-control"><span className="mb-2 text-sm font-bold text-slate-700">Confirm password</span><input autoComplete="new-password" className="input input-bordered w-full bg-white text-slate-900" minLength={8} name="confirmPassword" placeholder="Enter your password again" required type="password" /></label>}
          {error && <p className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm font-semibold text-rose-700" role="alert">{error}</p>}
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-violet-700 px-6 py-4 font-extrabold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60" disabled={busy} type="submit">{busy ? 'Please wait…' : isRegister ? 'Create account' : 'Sign in'}</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">{isRegister ? 'Already have an account?' : 'New to ElectroFix?'} <Link className="font-extrabold text-blue-700 hover:text-violet-700" state={location.state} to={isRegister ? '/login' : '/register'}>{isRegister ? 'Sign in' : 'Create an account'}</Link></p>
        <p className="mt-8 border-t border-slate-100 pt-5 text-center text-xs leading-5 text-slate-400">Demo account data is saved in this browser only. It is not connected to a server.</p>
      </section>
    </div>
  </main>
}
