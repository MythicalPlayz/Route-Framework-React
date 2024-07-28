import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import E404 from './components/E404/E404'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

const router = createHashRouter([  //createBrowserRouter Broken on Github
  {
    path: '', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: 'about', element: <About/> },
      {path: 'portfolio', element: <Portfolio/>},
      {path: 'contact', element: <Contact/>},
      {path: '*', element: <E404/>},
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
