import React, { useEffect } from 'react'
import Star from '../Star/Star'

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact';
    }, [])

    function placeholder(e) {
        const element = e.target;
        const pEle = element.previousElementSibling;
        if (element.value) {
            pEle.classList.remove('translate-y-[60px]');
        } else {
            pEle.classList.add('translate-y-[60px]');
        }
    }

    return (
        <>
            <div className="flex items-center py-12 flex-col">
                <h2 className='font-bold uppercase text-3xl md:text-4xl text-[#2c3e50] mb-4'>Contact Component</h2>
                <Star />
                <form className="flex items flex-col px-4 md:px-0 w-full md:w-1/2 text-black">
                    <label htmlFor="name" className='text-[#1abc9c] py-2 transition-all duration-300 translate-y-[60px]'>userName :</label>
                    <input type="text" name='name' id='name' className='bg-transparent border-b-2 rounded-lg p-4 bg-white z-[2] focus:outline-none' placeholder='userName' onInput={placeholder} />
                    <label htmlFor="age" className='text-[#1abc9c] py-2 transition-all duration-300 translate-y-[60px]'>userAge :</label>
                    <input type="number" name='age' id='age' className='bg-transparent border-b-2 rounded-lg p-4 bg-white z-[2] focus:outline-none' placeholder='userAge' min={0} onInput={placeholder}/>
                    <label htmlFor="email" className='text-[#1abc9c] py-2 transition-all duration-300 translate-y-[60px]'>userEmail :</label>
                    <input type="text" name='email' id='email' className='bg-transparent border-b-2 rounded-lg p-4 bg-white z-[2] focus:outline-none' placeholder='userEmail' onInput={placeholder}/>
                    <label htmlFor="pass" className='text-[#1abc9c] py-2 transition-all duration-300 translate-y-[60px]'>userPassword :</label>
                    <input type="text" name='pass' id='pass' className='bg-transparent border-b-2 rounded-lg p-4 bg-white z-[2] focus:outline-none' placeholder='userPassword' onInput={placeholder}/>
                    <button type="submit" className='text-white bg-[#1abc9c] m-4 w-1/2 md:w-1/3' onClick={function(e){e.preventDefault()}}>Send Message</button>
                </form>
            </div>
        </>
    )
}
