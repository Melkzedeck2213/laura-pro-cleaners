// context/AuthContext.js
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      setLoading(true); // make sure we show loading again
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }
  
    getSession()
  
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )
  
    return () => subscription?.unsubscribe()
  }, [])
  

  const value = {
    signUp: async (email, password) => {
      const { data, error } = await supabase.auth.signUp({ email, password })
      return { user: data?.user, error }
    },
    signIn: async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      return { user: data?.user, error }
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut()
      if (error) console.error('Error signing out:', error.message)
    },
    user,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}