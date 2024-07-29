import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {

    function toggleNav(e){
        const nav = document.querySelector('ul');
        const enabled = !nav.classList.contains('h-0');
        if (enabled){
            nav.classList.replace('h-48','h-0');
        }
        else {
            nav.classList.replace('h-0','h-48');
        }
    }

    function navChange(){
        if (window.scrollY >= 100) {
            document.querySelector('nav>div').classList.replace('my-5','my-1');
        } else {
            document.querySelector('nav>div').classList.replace('my-1','my-5');
        }
    }

    window.addEventListener('scroll',function(e){
        navChange();
    })

    return (
        <nav className='bg-[#2c3e50] w-full fixed top-0 transition-all duration-300 z-10'>
            <div className="w-full px-4 md:px-28 mx-auto flex justify-between items-center flex-wrap md:flex-nowrap transition-all duration-300 h-full my-5">
                <Link id='home' to="/" className='text-white text-2xl md:text-4xl font-bold uppercase hover:text-white'>Start Framework</Link>
                <button onClick={toggleNav} className='flex md:hidden justify-center items-center bg-transparent transition-all border-black border focus:outline focus:outline-black focus:outline-4'><i className='fa-solid fa-bars fa-2x'></i></button>
                <ul className="flex justify-evenly items-start md:items-center flex-col md:flex-row gap-2 overflow-hidden h-0 md:h-auto transition-all duration-300 w-full md:w-auto">
                    <li className='my-4'><NavLink to="about" className='text-white text-lg font-bold uppercase hover:text-white transition-all duration-300 p-2 rounded-lg'>About</NavLink></li>
                    <li className='my-4'><NavLink to="portfolio" className='text-white text-lg font-bold uppercase hover:text-white transition-all duration-300 p-2 rounded-lg'>Portfolio</NavLink></li>
                    <li className='my-4'><NavLink to="contact" className='text-white text-lg font-bold uppercase hover:text-white transition-all duration-300 p-2 rounded-lg'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}