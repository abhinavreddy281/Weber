import React from 'react'
import Img1 from '../assets/Images/icons8-arrow-96.png'

function Slide1() {
  return (
    <div id='slide1' className=' w-full h-screen  ' >
        <div id="left">
            <h1 className=' text-[7rem] leading-[14vh] font-[650] font-Interphases ' >The World of Manufacturing is Changing</h1>
        </div>
        <div id="right" className='relative' >
            <div id='work' className=' pl-[0.5vw] bg-red-500 ' >
                <img className=' absolute top-[35%] rotate-180 w-[2.4vw] ml-[0.5vw] ' src={Img1} alt="Image Here" />
            </div>
            <div className=' absolute top-[50%] ' >
                <h1 className=' text-[1.5rem] ml-[1vw] leading-[4vh] font-[400] mb-[3vh] ' >Robotic solutions for manufacturing and the supply chain</h1>
                <h1 className=' text-[1.5rem] ml-[1vw] leading-[4vh] font-[400] ' >We create manufacturing robots that autonomously scan, position, and complete their task without the need for skilled workers or robot programmers</h1>
            </div>
        </div>
    </div>
  )
}

export default Slide1