import React from 'react'

const Header = ({value}) => {
  return (
    <div className='w-full h-[80px] border-b px-[50px] bg-white shadow-sm'>
        <div className='w-full h-full flex justify-start items-center'>
        <h1 className='text-3xl font-semibold text-slate-800'>{value}</h1>
        </div>
    </div>
  )
}

export default Header