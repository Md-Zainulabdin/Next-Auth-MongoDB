import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

const Privatelayout = async ({children}) => {

    const session = await getServerSession(authOptions);
    if (!session?.user) redirect('/auth/login')

  return (
    <>{children}</>
  )
}

export default Privatelayout