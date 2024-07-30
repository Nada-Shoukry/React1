import React from 'react'

import  card1 from '/src/assets/images/port1.png'
import card2 from '/src/assets/images/port2.png'
import card3 from '/src/assets/images/port3.png'

export function Portfolio() {
  return (
    <>
    <div className='portfolio bg-white'>
        <div className='mt-20 py-10 text-center'>
            <h1 className='text-slate-700 font-bold text-4xl my-10'>PORTFOLIO COMPONENT</h1>
            <div className='star-icon flex justify-center items-center'>
                <div className='w-20 h-1 bg-slate-700'></div>
                <i className='fas fa-star text-slate-700 mx-2'></i>
                <div className='w-20 h-1 bg-slate-700'></div>
            </div>
        </div>
        <div className='p-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            <div className=" card col-span-1 rounded-md relative z-10 overflow-hidden">
                <img className='w-full' src={card1} alt="card1" />
                <div className='layer absolute top-0 left-0 right-0 bg-opacity-0 hover:bg-emerald-400 opacity-90 h-full'>
                    <div className=' text-8xl text-bold text-transparent hover:text-white w-full h-full flex justify-center items-center'>
                    <i className='fa-solid fa-plus'></i>
                    </div>
                </div>
            </div>
            <div className=" card col-span-1 rounded-md relative z-10 overflow-hidden">
                <img className='w-full' src={card2} alt="card2" />
                <div className='layer absolute top-0 left-0 right-0 bg-opacity-0 hover:bg-emerald-400 opacity-90 h-full'>
                    <div className=' text-8xl text-bold text-transparent hover:text-white w-full h-full flex justify-center items-center'>
                    <i className='fa-solid fa-plus'></i>
                    </div>
                </div>
            </div>
            <div className=" card col-span-1 rounded-md relative z-10 overflow-hidden">
                <img className='w-full' src={card3} alt="card3" />
                <div className='layer absolute top-0 left-0 right-0 bg-opacity-0 hover:bg-emerald-400 opacity-90 h-full'>
                    <div className=' text-8xl text-bold text-transparent hover:text-white w-full h-full flex justify-center items-center'>
                    <i className='fa-solid fa-plus'></i>
                    </div>
                </div>
            </div>
            <div className=" card col-span-1 rounded-md relative z-10 overflow-hidden">
                <img className='w-full' src={card1} alt="card4" />
                <div className='layer absolute top-0 left-0 right-0 bg-opacity-0 hover:bg-emerald-400 opacity-90 h-full'>
                    <div className=' text-8xl text-bold text-transparent hover:text-white w-full h-full flex justify-center items-center'>
                    <i className='fa-solid fa-plus'></i>
                    </div>
                </div>
            </div>
            <div className=" card col-span-1 rounded-md relative z-10 overflow-hidden">
                <img className='w-full' src={card2} alt="card5" />
                <div className='layer absolute top-0 left-0 right-0 bg-opacity-0 hover:bg-emerald-400 opacity-90 h-full'>
                    <div className=' text-8xl text-bold text-transparent hover:text-white w-full h-full flex justify-center items-center'>
                    <i className='fa-solid fa-plus'></i>
                    </div>
                </div>
            </div>
            <div className=" card col-span-1 rounded-md relative z-10 overflow-hidden">
                <img className='w-full' src={card3} alt="card6" />
                <div className='layer absolute top-0 left-0 right-0 bg-opacity-0 hover:bg-emerald-400 opacity-90 h-full'>
                    <div className=' text-8xl text-bold text-transparent hover:text-white w-full h-full flex justify-center items-center'>
                    <i className='fa-solid fa-plus'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    </>
  )
}
