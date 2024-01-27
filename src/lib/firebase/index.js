import { useEffect, useState } from 'react'
import { initializeApp, getApps } from '@firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  onAuthStateChanged,
} from '@firebase/auth'

export const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const app = getApps().length === 0 ? initializeApp(config) : getApps()[0]
export const auth = getAuth(app)

export function registerUserWithEmail({ email, password }) {
  if (!email || !password)
    throw new Error('Unable to create new user, email or password not defined')
  return createUserWithEmailAndPassword(auth, email, password)
}

export function signInWithEmail({ email, password }) {
  if (!email || !password)
    throw new Error('Unable to sign in user, email or password not defined')
  return signInWithEmailAndPassword(auth, email, password)
}

export function signOut() {
  return fbSignOut(auth).then(() => (window.location.href = '/'))
}

export function useUser() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const signedIn = !loading && !!user

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) setUser(user)
        else setUser(null)
        setLoading(false)
      }),
    []
  )

  return { loading, signedIn, ...(user || {}) }
}
