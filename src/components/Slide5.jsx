import React from 'react'
import img1 from '../assets/Images/03.png.webp'
import R1 from '../assets/Images/small.webp'

function Slide5() {
  return (
    <div className=" w-screen h-[100vh] relative ">
        <div className=" w-full h-full flex flex-col " >
            <div className=" w-full h-[80vh] flex pl-[2vw] absolute top-[20%] border-l-2 " >
                <div className="left w-[65vw] h-full pt-[10vh] font-Interphases " >
                    <div className=" w-full h-full relative " >
                    <img src={img1} alt="Image Here" className=" w-[15vw] absolute top-[5%] left-[5%] " />
                    <div className=" text-[3vw] absolute top-[20%] left-[4.5%] w-full font-[700] tracking-tight uppercase " > Compact and reliable hardware </div>
                    <div className=" text-white absolute top-[39%] text-[1.5vw] left-[5.2vw] w-[85%] leading-[3.8vh] " > Our robotics solutions are engineered with precision, offering a compact and robust design that significantly reduces the machine footprint by up to 80%. This space-saving innovation not only enhances your workspace but also ensures reliable and consistent performance, making it a perfect fit for any operational environment. </div>
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

export default Slide5