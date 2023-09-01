import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-[70px]'>
        <nav className='w-full h-full border-b flex justify-between items-center px-[50px]'>
            <div className="logo text-2xl font-medium">Next Auth</div>
            <div className="menu">
              <Link href={'/auth/login'}>Login</Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav