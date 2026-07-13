import {React,useState} from 'react'
import Auth from './tools/auth'
import Mue from './Mue'
import ToolWrapper from './toolWrapper'



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
    <div className="flex flex-col" >{activetool===true ? <button className="outline w-15  m-1 p-1 inset" onClick={()=>setActiveTool(false)}>◀</button> : null} 
  
    {activetool ? livetool : <ToolWrapper nowTools={settingTools} />  }
    {}
  
  

       
    </div>
  )
}

export default tools