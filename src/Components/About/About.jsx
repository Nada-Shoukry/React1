import React from 'react'

export function About() {
  return (
    <>
    <div className='about flex flex-col justify-center items-center bg-emerald-400 h-screen'>

      <div className='text-center py-10 mt-20'>
        <h1 className='text-white font-bold text-5xl my-5'>ABOUT COMPONENT</h1>
        <div className='star-icon flex justify-center items-center'>
          <div className='w-20 h-1 bg-white'></div>
          <i className='fas fa-star text-white mx-2'></i>
          <div className='w-20 h-1 bg-white'></div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 pt-5 gap-5 w-2/3'>
        <div className='col-span-1'>
            <p className='text-lg'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className='col-span-1'>
            <p className='text-lg'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      
    </div>   
    </>
  )
}
