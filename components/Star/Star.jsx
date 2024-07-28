import React from 'react'

export default function Star({color}) {

  if (color === 'white')

  return (
    <div className='w-64 flex justify-evenly items-center mb-4'>
        <div className="w-4/12 bg-white h-1"></div>
        <i className='fa-solid fa-star text-white'></i>
        <div className="w-4/12 bg-white h-1"></div>
    </div>
  )

  else 

  return (
    <div className='w-64 flex justify-evenly items-center mb-4'>
        <div className="w-4/12 bg-[#2c3e50] h-1"></div>
        <i className='fa-solid fa-star text-[#2c3e50]'></i>
        <div className="w-4/12 bg-[#2c3e50] h-1"></div>
    </div>
  )
}
