import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

export default function Layout() {
  return (
    <>
    <Nav/>
    <div className="mt-20">
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
