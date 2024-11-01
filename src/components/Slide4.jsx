import React from 'react'
import img1 from '../assets/Images/02.png.webp'
import R1 from '../assets/Images/d74a9c2f2588f3d5b2422b81148ab461.webp'

function Slide4() {
  return (
    <div className=" w-screen h-[100vh] relative ">
        <div className=" w-full h-full flex flex-col " >
            <div className=" w-full h-[80vh] flex pl-[2vw] absolute top-[20%] border-l-2 " >
                <div className="left w-[65vw] h-full  font-Interphases " >
                    <div className=" w-full h-full relative " >
                    <img src={img1} alt="Image Here" className=" w-[15vw] absolute top-[5%] left-[5%] " />
                    <div className=" text-[3vw] absolute top-[20%] left-[4.5%] w-full font-[700] tracking-tight " > WEBER MOTORS SOFTWARE </div>
                    <div className=" text-white absolute top-[39%] text-[1.5vw] left-[5.2vw] w-[85%] leading-[3.8vh] " > Weber Motors software is designed to revolutionize automation with its unparalleled learning capabilities. It intuitively adapts to your specific needs, mimicking human-like instincts to optimize performance continuously. Using generative AI and 3D vision, Weber Motors instantly identifies new objects as it teaches itself how to accurately execute any pick-and-place task in less than two minutes. </div>
                    </div>
                </div>
                <div className="right w-[35vw] h-full flex items-center justify-center " >
                <div className=" w-[80%] h-[90%] relative " >
                    <img src={R1} alt=" Image Here " className=" w-full h-full absolute " /> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide4