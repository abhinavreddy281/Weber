"use client"
import React from 'react'
import { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function CameraPositioner() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set( 8.604005268184338, -0.9426866013002859, -1.534332237225018)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return null
}

function Machine() {

  return (
    <div className=' w-full h-full absolute top-0 left-0 ' >
      <div className=' w-full h-full ' >
          <Canvas className=' w-[100%] h-[100%] '  >
            <CameraPositioner />
            <Environment preset="city" />
            <MacContainer />
          </Canvas>
      </div>
    </div>
  );
}

export default Machine