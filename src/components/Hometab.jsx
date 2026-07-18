import React from 'react'
import { LiquidGlass } from '@liquidglass/react';


const Hometab = () => {
  return (
    <div 
    className='inset h-95'>
    <LiquidGlass
    borderRadius={30}
        blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2.3}
        elasticity={1}
        displacementScale={2} className=" m-0 p-0">
      <img src="/src/assets/main.jpg" alt="" />
    </LiquidGlass>

    </div>
  )
}

export default Hometab