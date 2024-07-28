import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-[#2c3e50] w-full p-16 flex flex-col md:flex-row gap-1 gap-y-4 uppercase">
                        <div className="card w-full md:w-1/3 text-center py-8 px-4">
                            <h2 className='text-2xl md:text-3xl font-medium'>Location</h2>
                            <p className='capitalize mt-2 mb-4'>2215 John Daniel Drive</p>
                            <p className='normal-case'>Clark, MO 65243</p>
                        </div>
                        <div className="card w-full md:w-1/3 text-center py-8 px-4">
                            <h2 className='text-2xl md:text-3xl font-medium mb-2'>Around the web</h2>
                            <div className='flex justify-center gap-2'>
                                <i className="fa-brands fa-facebook w-[36px] h-[36px] flex justify-center items-center text-md rounded-full border-[1px] border-white p-2"></i>
                                <i className="fa-brands fa-twitter w-[36px] h-[36px] flex justify-center items-center text-md rounded-full border-[1px] border-white p-2"></i>
                                <i className="fa-brands fa-linkedin-in w-[36px] h-[36px] flex justify-center items-center text-md rounded-full border-[1px] border-white p-2"></i>
                                <i className="fa-solid fa-globe w-[36px] h-[36px] flex justify-center items-center text-md rounded-full border-[1px] border-white p-2"></i>
                            </div>
                        </div>
                        <div className="card w-full md:w-1/3 text-center py-8 px-4">
                            <h2 className='text-2xl md:text-3xl font-medium'>About Freelancer</h2>
                            <p className='normal-case mt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                </div>
                <div className='bg-[#1a252f] flex justify-center items-center p-6'>
                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>
        </>
    )
}
