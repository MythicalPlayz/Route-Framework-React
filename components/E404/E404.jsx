import React, { useEffect } from 'react'

export default function E404() {
    useEffect(() => {
        document.title = '404';
    }, [])
  return (
    <>
        <div className='flex justify-center items-center flex-col py-24 bg-[#1abc9c]'>
            <i className="fa-solid fa-triangle-exclamation fa-10x"></i>
            <h2 className='text-2xl md:text-3xl'>The Following Page is not Found</h2>
        </div>
    </>
  )
}
