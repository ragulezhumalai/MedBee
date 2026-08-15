import React from 'react'
import { LiquidGlass } from '@liquidglass/react';
import Todowrapper from './todowrapper.jsx';


const Hometab = () => {
  return (
    <div 
    className='insetxl h-[65dvh] sm:max-h-[65dvh] sm:max-w-[130%]'>
    <LiquidGlass
    borderRadius={30}
        blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2}
        elasticity={1}
        displacementScale={2} className="Tint p-0">
          <div className='inset w-full h-full'> <Todowrapper /></div>
      
    </LiquidGlass>

    </div>
  )
}

export default Hometab