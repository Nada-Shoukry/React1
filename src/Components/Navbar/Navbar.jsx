import React from 'react'
import { NavLink } from 'react-router-dom'


export function Navbar() {
  return (
    <> 
    <div className='navbar flex justify-between items-center py-8 px-5 lg:px-20 bg-slate-700 text-white fixed top-0 right-0 left-0 z-20'>
      
      <div className='nav-title cursor-pointer'>
        {/* <h2 className='text-3xl font-bold'>START FRAMEWORK</h2> */}
        <NavLink className="bg-transparent text-2xl lg:text-3xl font-bold" to="/">START FRAMEWORK</NavLink>
      </div>

      <div className='nav-links hidden lg:block'>
        <ul className='flex gap-5 items-center'>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li>
          <NavLink to="/contacts">CONTACTS</NavLink>
          </li>
        </ul>
      </div >

      <div className='navlinks-toggler block lg:hidden'>
        <div className='border border-slate-600 rounded-md px-3 py-1 text-slate-600 font-bold text-2xl cursor-pointer'>
          <i className='fa-solid fa-bars'></i>
        </div>

      </div>

    </div>
    </>
  )
}




