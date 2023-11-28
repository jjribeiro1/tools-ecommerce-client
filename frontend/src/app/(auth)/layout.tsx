import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode}) {
  return (
    <main className='flex justify-center container my-0 mx-auto pt-32 min-h-screen w-full'>
        {children}
    </main>
  )
}
