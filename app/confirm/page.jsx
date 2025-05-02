'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  const homePage = () => {
    router.push('/')
  }

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Thank you for joining us. we are proud and honoured to serve you</h1>
    

    <button
      onClick={()=>homePage()}
      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-blue-700"
    >
      Home Page
    </button>
  </div>
  )
}

export default Page
