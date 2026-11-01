import {React,useState} from 'react'
import Auth from './tools/auth'
import Mue from './Mue'
import ToolWrapper from './toolWrapper'

import Clia from './tools/clia'
import back from '../assets/back.png'
import Portals from './tools/portals'
import Npilookup from './tools/npiLookup'


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

   else if(currentTool==="Clia"){
    livetool=<Clia />
   
  }
    else if(currentTool==="Portals"){
    livetool=<Portals />
   
  }

   else if(currentTool==="Npi"){
    livetool=<Npilookup />
   
  }






  return (
    <div className="flex relative  p-2 flex-col" >{activetool===true ? 
    <div  className="  max-w-10 m-1 h-10" onClick={()=>setActiveTool(false)}><img src={back} alt="Back" /></div> : null} 
  
    {activetool ? livetool : <ToolWrapper nowTools={settingTools} />  }
    {}
  
  

       
    </div >
  )
}

export default tools