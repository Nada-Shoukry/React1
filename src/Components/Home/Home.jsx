import React from 'react'
import profile from '/src/assets/images/avataaars.svg'

export function Home() {
  return (
    <>
    <div className='home flex flex-col justify-center items-center bg-emerald-400 h-screen'>
      <img className='w-60 h-60 my-5' src={profile} alt="profile" />
      <h1 className='text-white font-bold text-5xl my-5'>START FRAMEWORK</h1>
      <div className='star-icon flex justify-center items-center'>
        <div className='w-20 h-1 bg-white'></div>
        <i className='fas fa-star text-white mx-2'></i>
        <div className='w-20 h-1 bg-white'></div>
      </div>
      <h4 className='text-white mt-5 '>Graphic Artist - Web Designer - Illustrator</h4>
    </div>   
    </>
  )
}
