import {React,useState} from 'react'
import Mue from './Mue'
import {LiquidGlass} from '@liquidglass/react'

const ToolWrapper = ({nowTools}) => {

const changeTool=set=>{
  nowTools(set)
}

  return (
    <LiquidGlass
      blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2.3}
        elasticity={1}
        displacementScale={2}>
      <ul className='grid grid-cols-1 mueOutput md:grid-cols-auto gap-auto p-4 m-5 text-left outline w-[95%] h-[90%] item-center'>
        <button className='  p-4 inset' onClick={()=>changeTool("Mue")} >MUE Edits</button>
        <button className=' oultine-2 p-4' onClick={()=>changeTool("Auth")} >Auth lookup</button>
        <button className=' oultine-2 p-4' onClick={()=>changeTool("Findcare")} >Findcare</button>
        <button className=' oultine-2 p-4' onClick={()=>changeTool("alltools")} >All Tools</button>
        <button className=' oultine-2 p-4' onClick={()=>changeTool("alltools")} >All Tools</button>
      </ul>



    </LiquidGlass>
  )
}

export default ToolWrapper