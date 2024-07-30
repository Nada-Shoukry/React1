import React from 'react'

export function Footer() {
  return (
    <>

    <div className='footer bg-slate-700 '>

      <div className='grid lg:grid-cols-3 px-20 py-14 gap-3'>
        <div className='col-span-1'>
            <div className='block1 text-center'>
                <h2 className='text-2xl font-bold my-3'>LOCATION</h2>
                <span>2215 John Daniel Drive</span><br />
                <span>Clark, MO 65243</span>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='block2 flex flex-col justify-center items-center'>
                <h2 className='text-2xl font-bold my-3'>AROUND THE WEB</h2>
                <div className='footer-icons flex justify-center items-center'>
                    <div className='border rounded-full py-1 px-2 m-2 hover:bg-white hover:text-emerald-600 transition-colors'><i className='fa-brands fa-facebook'></i></div>
                    <div className='border rounded-full py-1 px-2 m-2 hover:bg-white hover:text-emerald-600 transition-colors'><i className="fa-brands fa-twitter"></i></div>
                    <div className='border rounded-full py-1 px-2 m-2 hover:bg-white hover:text-emerald-600 transition-colors'><i className='fa-brands fa-linkedin-in'></i></div>
                    <div className='border rounded-full py-1 px-2 m-2 hover:bg-white hover:text-emerald-600 transition-colors'><i className='fas fa-globe'></i></div>
                </div>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='block3 text-center'>
                <h2 className='text-2xl font-bold my-3'>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
      </div>

      <div className='copyrights bg-slate-900 py-5 text-white text-center'>
        <span>Copyright © Your Website 2021</span>
      </div>

    </div>

    
    </>
  )
}
