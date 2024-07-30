import { useState } from 'react'
import './App.css'
import { Home } from './Components/Home/Home'

import { About } from './Components/About/About'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { Contacts } from './Components/Contacts/Contacts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Notfound } from './Components/Notfound/Notfound'




function App() {

  let router = createBrowserRouter([
    {path: '' , element: <Layout /> , children: [
      {index: true, element: <Home /> },
      {path: 'about' , element: <About />},
      {path: 'portfolio' , element: <Portfolio />},
      {path: 'contacts' , element: <Contacts />},
      {path: '*' , element: <Notfound />}
    ]}
  ])

  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}

export default App
