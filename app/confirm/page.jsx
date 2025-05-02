'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  const homePage = () => {
    router.push('/')
  }

  return (
    <div>
      <h1>Email account confirmed successfully</h1>
      <button className='bg-purple-950 text-white cursor-pointer' onClick={homePage}>
        Home page
      </button>
    </div>
  )
}

export default Page
