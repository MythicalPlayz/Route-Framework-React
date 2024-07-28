import React, { useEffect } from 'react'
import Star from '../Star/Star'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {
    useEffect(() => {
        document.title = 'Portfolio';
    }, [])

    function showDetails(e) {
        const holder = e.currentTarget;
        const image = holder.querySelector('img');
        document.querySelector('#details').classList.remove('hidden');
        document.querySelector('#details img').src = image.src;
    }

    function hideDetails(e) {
        const element = e.currentTarget;
        element.classList.add('hidden');
    }

    return (
        <>
            <div className="flex items-center py-12 flex-col">
                <h2 className='font-bold uppercase text-3xl md:text-4xl text-[#2c3e50] mb-4'>Portfolio Component</h2>
                <Star />
                <div className="grid gap-8 w-4/5 grid-cols-1 md:grid-cols-3">
                    <div className="w-full rounded-lg group overflow-hidden box-border relative cursor-pointer" onClick={showDetails}>
                        <div className='absolute top-0 opacity-0 bottom-0 left-0 right-0 bg-[#1abc9c] transition-all duration-300 text-white flex justify-center items-center group-hover:opacity-100'>
                            <i className='fa-solid fa-plus fa-5x'></i>
                        </div>
                        <img src={port1} className='w-full' alt="" />
                    </div>
                    <div className="w-full rounded-lg group overflow-hidden box-border relative cursor-pointer" onClick={showDetails}>
                        <div className='absolute top-0 opacity-0 bottom-0 left-0 right-0 bg-[#1abc9c] transition-all duration-300 text-white flex justify-center items-center group-hover:opacity-100'>
                            <i className='fa-solid fa-plus fa-5x'></i>
                        </div>
                        <img src={port2} className='w-full' alt="" />
                    </div>
                    <div className="w-full rounded-lg group overflow-hidden box-border relative cursor-pointer" onClick={showDetails}>
                        <div className='absolute top-0 opacity-0 bottom-0 left-0 right-0 bg-[#1abc9c] transition-all duration-300 text-white flex justify-center items-center group-hover:opacity-100'>
                            <i className='fa-solid fa-plus fa-5x'></i>
                        </div>
                        <img src={port3} className='w-full' alt="" />
                    </div>
                    <div className="w-full rounded-lg group overflow-hidden box-border relative cursor-pointer" onClick={showDetails}>
                        <div className='absolute top-0 opacity-0 bottom-0 left-0 right-0 bg-[#1abc9c] transition-all duration-300 text-white flex justify-center items-center group-hover:opacity-100'>
                            <i className='fa-solid fa-plus fa-5x'></i>
                        </div>
                        <img src={port1} className='w-full' alt="" />
                    </div>
                    <div className="w-full rounded-lg group overflow-hidden box-border relative cursor-pointer" onClick={showDetails}>
                        <div className='absolute top-0 opacity-0 bottom-0 left-0 right-0 bg-[#1abc9c] transition-all duration-300 text-white flex justify-center items-center group-hover:opacity-100'>
                            <i className='fa-solid fa-plus fa-5x'></i>
                        </div>
                        <img src={port2} className='w-full' alt="" />
                    </div>
                    <div className="w-full rounded-lg group overflow-hidden box-border relative cursor-pointer" onClick={showDetails}>
                        <div className='absolute top-0 opacity-0 bottom-0 left-0 right-0 bg-[#1abc9c] transition-all duration-300 text-white flex justify-center items-center group-hover:opacity-100'>
                            <i className='fa-solid fa-plus fa-5x'></i>
                        </div>
                        <img src={port3} className='w-full' alt="" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 bg-opacity-25 z-[5] bg-[#0d6efd] hidden' id='details' onClick={hideDetails}>
                <img src={port1} alt="" className='w-full md:w-1/3'/>
            </div>
        </>
    )
}
