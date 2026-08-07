import { React, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Time from './components/Time.jsx'
import Hometab from './components/Hometab.jsx'
import './App.css'
import Mue from './components/Mue.jsx';
import Balatro from './components/Balatro.jsx'
import Tools from './components/tools.jsx'
import Auth from './components/tools/auth.jsx'
import Insnumbers from './components/Insnumbers.jsx';
import Ballpit from './components/Ballpit.jsx';


export default function App() {

  const [tab,setTab] =useState("Home");
  const swi= (tabName)=>{
    setTab(tabName)
    console.log("Switched to "+ tabName)
  }
  let main;
if(tab==="Home"){
  main= <Hometab />
}
else if(tab==="Policies"){
  main= <div>Policies coming soon...</div>
}else if(tab==="About"){
  main= <div>About coming soon...</div>
}
else if(tab==="Tools"){
  main= <Tools />
}
  return (
    
    <Balatro
     pixelFilter={2000}
      isRotate={false}
      mouseInteraction
    color1="#000000"
    color2="#e2800ff8"
  color3="#6f4383fd"
  className="main relative h-screen flex  bg-black text-white overflow-y-auto ">


     <div className=""> 
      <NavBar switchTab={swi} /> 
      </div>  
      {/* Time bar Section */}
<div className=' flex flex-col relative z-10 mx-3 mt-3'>
 
 <div className=" flex justify-center items my-6 max-w-[100%]"><Time /></div> 
    {/* Main Section */}
   <div className=' mt-6  flex flex-col-reverse justify-evenly items-center md:flex-row '>
<Insnumbers />
<div className=" w-[100%] max-w-3xl">{main}</div>
   
    </div>
  
  
  </div>
      
    </Balatro>
  )
}
    