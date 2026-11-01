import React from 'react'
import { LiquidGlass } from '@liquidglass/react';
import logo from "/src/assets/rm_logo1.png"

const About = () => {
  return (
    <LiquidGlass 
        blur={5}
        contrast={1}
        brightness={1}
        saturation={2.0}
        elasticity={0.50}
        displacementScale={8}
        className="inset tinted  h-130">
          <div className=" flex flex-col m-4 w-[90%] h-113 sm:text-xs mueOutput font-extralight justify-start items-center">
           <div className='flex flex-col items-center justify-center text-center text-xl'> <img src={logo} className="w-20 h-20  sm:w-20 p-0 sm:h-20 logoshadow"></img><div>RCM Matrix (beta)</div></div>
           <div className=" w-[95%] flex flex-col items-center justify-evenly">


            <ul className='flex flex-col max-w-[100%] sm:flex-row w-[100%] items-center justify-evenly'>
              <li className='inset w-120 p-4 m-1 h-42 flex flex-col justify-evenly'>
               <div className='sm:text-2xl'>About RCM Matrix</div>
                <p>RCM Matrix is a frontend-only application that operates entirely within your browser, with no backend server. All notes and lookup searches are processed locally on your device. Notes are stored in your browser’s localStorage, and neither notes nor lookup inputs are transmitted to or uploaded to any server.</p>
              </li>
              <li className='inset w-120 p-4 m-1 h-42'>
                <div>
                  <div className='sm:text-2xl'>Features</div>
                  <p>Here are the key features of our product.</p>
                  <ul class="list-disc pl-5">
                    <li>Quick Notes</li>
                    <li>Payer Phone directory</li>
                    <li>MUE edits Lookup</li>
                    <li>CLIA data lookup</li>
                    <li>Auth lookup</li>
                  </ul>
                </div>
              </li>
              <li className='inset w-120 p-4 m-1 h-42'>
                <div>
                  <div className='sm:text-2xl'>Tech used</div>
                  <ul class="list-disc pl-5 my-3 font-extralight">
                    <li className='w-70 text-sm list-none'> <p>Stack: Vite React, Tailwind CSS</p> </li>
                    <li className='w-60 text-sm flex items-center justify-evenly'> <p>Background:  </p> <img src={"https://reactbits.dev/assets/react-bits-logo-BEVRCkxh.svg"} alt="Background" className="w-60 p-1" /></li>
                    <li className='w-70 text-sm list-none'> <p>UI (LiquidGlass) : @liquidglass/react  </p> </li>
                  </ul>
                </div>
              </li>

              </ul>

              <ul className='flex flex-row w-[100%] items-center justify-evenly'>
              <li className='inset w-120 p-4 m-1 h-42'>
                <div className='sm:text-2xl'>Updates <span class="sm:text-lg p-1 bg-green-700 max-w-[70px] rounded-lg text-center">  V0.5.1</span></div>
                <ul class="list-disc pl-5">
                    <li className='list-disc'>Added NPI Lookup: <br /> Search and retrieve healthcare provider information directly using their National Provider Identifier (NPI).</li>
                    <li>Fixed several UI glitches across the application.</li>  
                  </ul>
                  <p className='p-1'>Thank you for using RCM Matrix!</p>
              </li>
              <li className='inset w-120 p-4 m-1 h-42'>
                <div className='sm:text-2xl'>Total Size 160 MB (Initial Load takes time)</div>
                <ul class="list-disc mt-5 pl-5"> Upcoming features:
                    <li>Working days calculator (Under Development)</li>
                    <li>Provider portals directory (Under Development)</li>
                  </ul>
              </li>
              <li className='inset w-120 p-4 m-1 h-42'>
                <div className='sm:text-2xl'>Developed by  </div>
                <p>(under construction)</p>
              </li>
            </ul>

            
            
            
            </div> 


           </div>
          
         
          
          
          </LiquidGlass>
  )
}

export default About