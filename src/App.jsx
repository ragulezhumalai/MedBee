import { React, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Time from './components/Time.jsx'
import Hometab from './components/Hometab.jsx'
import './App.css'
import Mue from './components/Mue.JSX';




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
else if(tab==="social"){
  main= <div>Socials coming soon...</div>
}else if(tab==="about"){
  main= <div>About me coming soon...</div>
}
  return (
    
    <div className="main relative h-screen overflow-hidden bg-black text-white overflow-y-auto">

     

       <NavBar switchTab={swi} />
<div className='flex flex-col  relative  z-10 mx-5'>
  <Time />
   <div>
   {main}
    </div>
  
  
  </div>
      
      

    </div>
  )
}
    