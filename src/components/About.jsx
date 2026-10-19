import React from 'react'
import { LiquidGlass } from '@liquidglass/react';
import logo from "/src/assets/rm_logo.PNG"

const About = () => {
  return (
    <LiquidGlass 
        blur={3}
        
        contrast={1.2}
        brightness={0.8}
        saturation={2.0}
        elasticity={0.50}
        tintColor="#162325"
        displacementScale={1}
        className="">
          <div className="flex flex-col m-4 text-sm mueOutput font-extralight justify-center items-center">
            <img src={logo} className="w-50 h-50"></img>
            <p>RCM Matrix is a frontend-only application with no backend server. Notes and lookup searches are processed in the browser. Notes are stored in browser's `localStorage`, and neither notes nor lookup inputs are uploaded to any server. Authorization links open external payer or Medicare websites. Those sites are outside RCM Matrix's control and may receive standard browser requests when visited</p>
             <div> <span className="text-lg">Features:</span> <br></br>
Quick Notes: Create, edit, complete, and delete notes. Notes are saved in the current browser using localStorage.<br></br>
MUE Edits Lookup: Search MUE data by CPT code to view the MUE value and adjudication indicator.<br></br>
CLIA Lookup (Beta): Search the CLIA facility listing by CLIA ID or ZIP code. The listing identifies QCOR (CMS) as its source.<br></br>
Authorization Lookup: Open selected payer and Medicare authorization lookup resources.<br></br>
Time Zones: View current times in IST, CST, EST, and PST.<br></br>
Policies: A placeholder for a future feature.<br></br>
The Portals feature is also marked as coming soon</div>


           </div>
          
         
          
          
          </LiquidGlass>
  )
}

export default About