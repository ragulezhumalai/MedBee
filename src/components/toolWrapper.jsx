import {React,useState} from 'react'
import Mue from './Mue'
import {LiquidGlass} from '@liquidglass/react'
import mue from '../assets/mue.png'
import auth from '../assets/auth.png'
import clia from '../assets/Clia.png'
import portals from '../assets/portals.png'

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
      <ul className='grid z-0 grid-cols-2 text-sm sm:text-lg sm:grid-cols-4 gap-2 justify-evenly mueOutput md:grid-cols-auto gap-auto p-4 m-5 text-left h-[60dvh] sm:max-h-[60dvh] sm:max-w-[130%] item-center'>
        <button className='  Menu  ' onClick={()=>changeTool("Mue")} > <img src={mue} alt="MUE" className=" m-2 w-22 h-22 mx-auto" /> <div className=' text-center'>MUE Edits</div> </button>
         <button className=' Menu ' onClick={()=>changeTool("Clia")} > <img src={clia} alt="Clia" className="w-22 h-22 m-2 mx-auto" /> <div className=' text-center'>CLIA Lookup</div> </button>
        <button className=' Menu ' onClick={()=>changeTool("Auth")} > <img src={auth} alt="Auth" className="w-22 h-22 m-2 mx-auto" /> <div className=' text-center'>Auth lookup</div> </button>
       
        <button className=' Menu ' onClick={()=>changeTool("Portals")} > <img src={portals} alt="Portals" className="w-22 h-22 m-2 mx-auto" /> <div className=' text-center'>Coming Soon!</div> </button>
      </ul>



    </LiquidGlass>
  )
}

export default ToolWrapper