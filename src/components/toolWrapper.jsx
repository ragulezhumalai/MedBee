import {React,useState} from 'react'
import Mue from './Mue'
import {LiquidGlass} from '@liquidglass/react'

const ToolWrapper = ({nowTools}) => {

const changeTool=set=>{
  nowTools(set)
}

  return (
    <LiquidGlass
     borderRadius={30}
        blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2}
        elasticity={1}
        displacementScale={2}
        className="Tint">
      <ul className='grid z-0 grid-cols-2 text-sm sm:text-lg  sm:grid-cols-4 gap-2 justify-evenly mueOutput md:grid-cols-auto gap-auto p-4 m-5 text-left h-[60dvh] sm:max-h-[60dvh] sm:max-w-[130%] item-center'>
        <button className='  Menu  ' onClick={()=>changeTool("Mue")} > <img src="/src/assets/mue.png" alt="MUE" className="sm:w-16 m-2 sm:h-16 mx-auto" /> <div className=' text-center'>MUE Edits</div> </button>
        <button className=' Menu ' onClick={()=>changeTool("Auth")} > <img src="/src/assets/auth.png" alt="Auth" className="sm:w-16 sm:h-16 m-2 mx-auto" /> <div className=' text-center'>Auth lookup</div> </button>
        <button className=' Menu ' onClick={()=>changeTool("alltools")} > <img src="/src/assets/Clia.png" alt="Findcare" className="sm:w-16 m-2 sm:h-16 mx-auto" /> <div className=' text-center'>(coming soon)</div> </button>
      </ul>



    </LiquidGlass>
  )
}

export default ToolWrapper