import React, { useEffect } from 'react'
import Star from '../Star/Star'
import avatar from '../../assets/avataaars.svg'

export default function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, [])
    return (
        <>
            <div className="w-full bg-[#1abc9c] py-52 md:py-24 flex justify-center items-center">
                <div className="flex justify-center items-center flex-col md:w-1/4">
                    <div className="image-holder px-4 flex justify-center w-5/6 md:w-3/4">
                        <img src={avatar} className='w-full mb-8'></img>
                    </div>
                    <h2 className='font-bold uppercase text-3xl md:text-4xl text-white mb-4'>Start Framework</h2>
                    <Star color='white'></Star>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
