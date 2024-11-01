import React from 'react'
import Navbar from '../components/navbar'
import Page1Text from '../components/Page1Text'
import Machine from '../components/Machine'

function Page1() {
  return (
    <div className=' w-full h-screen font-[SCHABO] relative overflow-hidden border-b-2 ' >
        <div className='back w-full h-screen' >
            <div className=' w-full h-[10vh] ' >
                <Navbar />
            </div>
            <div className=' w-full h-[90vh] ' >
                <Page1Text />
            </div>
        </div>
        <div className=' w-full h-screen bg-transparent ' >
            <Machine />
        </div>
    </div>
  )
}

export default Page1