import React from 'react'
import { LiquidGlass } from '@liquidglass/react';
import Todowrapper from './todowrapper.jsx';


const Hometab = () => {
  return (
    <div 
    className='insetxl h-95'>
    <LiquidGlass
    borderRadius={40}
        blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2}
        elasticity={1}
        displacementScale={2} className=" m-0 Tint p-0">
          <div className='w-full h-full'> <Todowrapper /></div>
      
    </LiquidGlass>

    </div>
  )
}

export default Hometab