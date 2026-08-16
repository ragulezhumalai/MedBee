import {React,useState} from 'react'
import Auth from './tools/auth'
import Mue from './Mue'
import ToolWrapper from './toolWrapper'
import {LiquidGlass} from '@liquidglass/react'


const tools = () => {

    const [currentTool,setCurrentTool]=useState("alltools")
    const [activetool,setActiveTool]=useState(false)

    const settingTools=(set)=>{
      setCurrentTool(set)
        setActiveTool(true)
      
    }

  
    
    let livetool;
  if(currentTool==="Mue"){
   
    livetool=<Mue />
   
    
  }



  
  else if(currentTool==="Auth"){
    livetool=<Auth />
   
  }






  return (
    <div className="flex relative  p-2 flex-col" >{activetool===true ? 
    <button className="outline  max-w-10 m-2 h-10 backbtn" onClick={()=>setActiveTool(false)}>◀</button> : null} 
  
    {activetool ? livetool : <ToolWrapper nowTools={settingTools} />  }
    {}
  
  

       
    </div >
  )
}

export default tools