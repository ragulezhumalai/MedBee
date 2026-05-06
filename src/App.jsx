import { React, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Time from './components/Time.jsx'
import Hometab from './components/Hometab.jsx'
import './App.css'
import Mue from './components/Mue.jsx';
import Balatro from './components/Balatro.jsx'
import Tools from './components/tools.jsx'
import Auth from './components/tools/auth.jsx'


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
  main= <div>About me coming soon...</div>
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

     This side is in development, check back later for updates!

       <NavBar switchTab={swi} />
<div className=' flex flex-col relative z-10 mx-3'>
  
  <Time />
  
   <div className=' my-4 mx-2.3'>

   {main}
    </div>
  
  
  </div>
      
      

    </Balatro>
  )
}
    