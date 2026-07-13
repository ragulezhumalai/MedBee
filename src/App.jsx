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
    isRotate={false}
  mouseInteraction={false}
  pixelFilter={2000}
  color1="#DE443B"
  color2="#006BB4"
  color3="#162325"
  className="main relative h-screen bg-black text-white overflow-y-auto ">

     This site is in development, check back later for updates!

       <NavBar switchTab={swi} />
<div className=' flex flex-col relative z-10 mx-3'>
  
  <Time />
    
   <div className=' h-[90%] mt-6  flex flex-col-reverse justify-evenly md:flex-row outline-4 justify-between'>
<Insnumbers />
<div className="div md:w-3xl h-[383px] m-2 max-w-3xl">{main}</div>
   
    </div>
  
  
  </div>
      
    </Balatro>
  )
}
    