import React from "react";
import {LiquidGlass} from '@liquidglass/react'


export default function NavBar({switchTab}) {


  const changeTab=tabName=>{
    switchTab(tabName)
  }

  return (
     <div className="fixed z-[999] top-5 left-1/2 -translate-x-1/2 w-[90%] md:max-w-[52.5%]">
      <LiquidGlass
        borderRadius={30}
        blur={4.0}
        
        contrast={2}
        brightness={1.1}
        saturation={2.0}
        elasticity={0.50}
        displacementScale={3}
        className="inset Tint"
      >
        <ul className="flex inset m-0   justify-evenly  w-[100%] items-center p-1  gap-2"> 
        <button onClick={()=>changeTab("Home")} className="optionhover p-2">Home</button>
        <button onClick={()=>changeTab("Tools")} className="optionhover p-2">Tools</button>
        <button onClick={()=>changeTab("Policies")} className="optionhover p-2">Policies</button>
        <button onClick={()=>changeTab("About")} className="optionhover p-2">About</button>
        </ul>
       
      </LiquidGlass>
  
    </div>
  );
}