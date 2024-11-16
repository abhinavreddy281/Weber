import React from 'react'
import img1 from '../assets/Images/02.png.webp'
import R1 from '../assets/Images/support.webp'

function Slide4() {
  return (
    <div className=" w-screen h-[100vh] relative ">
        <div className=" w-full h-full flex flex-col " >
            <div className=" w-full h-[80vh] flex pl-[2vw] absolute top-[20%] border-l-2 " >
                <div className="left w-[65vw] h-full pt-[18vh] " >
                    <div className=" w-full h-full relative " >
                    <img src={img1} alt="Image Here" className=" w-[15vw] absolute top-[5%] left-[5%] " />
                    <div className=" text-[3vw] absolute top-[20%] left-[4.5%] w-full font-[700] tracking-tight uppercase " > 24/7 service and support </div>
                    <div className=" text-white absolute top-[39%] text-[1.5vw] left-[5.2vw] w-[85%] leading-[3.8vh] " > Consider us an integral part of your team. Every deployment of our Weber Motors solutions comes with dedicated 24/7 service and support. Our experts are always available to ensure your operations run smoothly, addressing any issues promptly and providing ongoing assistance to maximize your productivity and success. </div>
                    </div>
                </div>
                <div className="right w-[35vw] h-full flex items-center justify-center  " >
                <div className=" w-[90%] h-[85%] relative image-container " >
                    <img src={R1} alt=" Image Here " className=" w-full h-full absolute " /> 
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Slide4