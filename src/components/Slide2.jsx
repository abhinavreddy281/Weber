import React from 'react'
import Img1 from '../assets/Images/icons8-arrow-96.png'

function Slide2() {
  return (
    <div id='slide2' className=' w-full h-screen  bg-black ' >
        <div id="left">
            <h1 className=' text-[6.7rem] leading-[15vh] font-[700] font-Interphases ' >we’re delivering the promise of intelligent industrial robotics</h1>
        </div>
        <div id="right">
            <div id='work' className=' relative top-[35%] pl-[0.5vw] font-Interphases ' >
                <img className=' rotate-180 w-[2.4vw] mb-[3.5vw] ml-[0.5vw] ' src={Img1} alt="Image Here" />
                <h1 className=' text-[1.5rem] ml-[1vw] leading-[4vh] font-[400] mb-[3vh] ' >Today we’re focused on fewer robotics, but that’s only the beginning. We’re making intelligent robots that make manufacturing infinitely flexible and infinitely scalable. Our mission is to enable robots to build, so humans can create. The future of manufacturing will be built by Weber Motors.</h1>
            </div>
        </div>
    </div>
  )
}

export default Slide2