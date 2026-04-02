import React from "react";
import {LiquidGlass} from '@liquidglass/react'


export default function NavBar({switchTab}) {


  const changeTab=tabName=>{
    switchTab(tabName)
  }

  return (
     <div className="fixed   z-[999] top-5 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto">
      <LiquidGlass
        borderRadius={30}
        blur={2}
        
        contrast={1.2}
        brightness={1.1}
        saturation={2.0}
        elasticity={0.50}
        displacementScale={3}
        className="border-1 border-white border-white/30"
      >
        <ul className="flex   justify-evenly  w-[100%] items-stretch px-4 py-2 gap-2"> 
        <button onClick={()=>changeTab("Home")} className="">Home</button>
        <button onClick={()=>changeTab("project")} className="">Projects</button>
        <button onClick={()=>changeTab("social")} className="">Social</button>
        <button onClick={()=>changeTab("about")} className="">About</button>
        </ul>
       
      </LiquidGlass>
  
    </div>
  );
}