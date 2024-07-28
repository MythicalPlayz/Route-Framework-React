import React, { useEffect } from 'react'
import Star from '../Star/Star'
export default function About() {
  useEffect(() => {
    document.title = 'About';
  }, [])
  return (
    <>
      <div className="w-full bg-[#1abc9c] flex justify-center items-center flex-col py-56">
        <h2 className='font-bold uppercase text-3xl md:text-4xl text-white mb-4'>About Component</h2>
        <Star color='white'></Star>
        <div className="w-3/4 mx-auto flex justify-center gap-x-4 flex-wrap md:flex-nowrap">
          <p className="w-full md:w-1/2 mb-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className="w-full md:w-1/2 mb-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </>
  )
}
