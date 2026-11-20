import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const USERS_KEY = 'electrofix-users'
const SESSION_KEY = 'electrofix-session'
const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL || 'admin@electrofix.com').trim().toLowerCase()

function createSession(account) {
  return { name: account.name, email: account.email, isAdmin: account.email === ADMIN_EMAIL }
}

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

function toBase64(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)))
}

async function hashPassword(password, salt) {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: encoder.encode(salt), iterations: 120000, hash: 'SHA-256' }, key, 256)
  return toBase64(bits)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
      return session ? { ...session, isAdmin: session.email === ADMIN_EMAIL } : null
    } catch {
      return null
    }
  })

  async function register({ name, email, password }) {
    const users = readUsers()
    const normalizedEmail = email.trim().toLowerCase()
    if (users.some((account) => account.email === normalizedEmail)) {
      throw new Error('An account with this email already exists. Please sign in instead.')
    }

    const salt = toBase64(crypto.getRandomValues(new Uint8Array(16)))
    const account = { name: name.trim(), email: normalizedEmail, salt, passwordHash: await hashPassword(password, salt) }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, account]))
    const session = createSession(account)
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    setUser(session)
  }

  async function login({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase()
    const account = readUsers().find((candidate) => candidate.email === normalizedEmail)
    if (!account || await hashPassword(password, account.salt) !== account.passwordHash) {
      throw new Error('Email or password is incorrect.')
    }
    const session = createSession(account)
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    setUser(session)
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  const value = useMemo(() => ({ user, register, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
