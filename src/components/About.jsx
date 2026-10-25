import React from 'react'
import { LiquidGlass } from '@liquidglass/react';
import logo from "/src/assets/rm_logo1.PNG"

const About = () => {
  return (
    <LiquidGlass 
        blur={5}
        contrast={1}
        brightness={1}
        saturation={2.0}
        elasticity={0.50}
        // tintColor="#162325"
        displacementScale={8}
        className="inset tinted  h-130">
          <div className=" flex flex-col m-4 w-[90%] h-113 sm:text-xs mueOutput font-extralight justify-start items-center">
           <div className='flex flex-col items-center justify-center text-center text-xl'> <img src={logo} className="w-20 h-20  sm:w-20 p-0 sm:h-20"></img><div>RCM Matrix (beta)</div></div>
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
              </ul>

              <ul className='flex flex-row w-[100%] items-center justify-evenly'>
              <li className='inset w-120 p-4 m-1 h-42'>
                <div className='sm:text-2xl'>Updates</div>
                <div class="sm:text-lg ml-3 bg-green-700 max-w-[70px] rounded-lg text-center">  V 0.4.6</div>
                <ul class="list-disc pl-5">
                    <li>Added background Intro</li>
                    <li>Improved background quality</li>
                    <li>Redesigned icons</li>
                    <li>Fixed bug in MUE edits Lookup</li>
                    <li>Fixed issue with Payer Phone directory search bar</li>
                  </ul>
              </li>
              <li className='inset w-120 p-4 m-1 h-42'>
                <div className='sm:text-2xl'>Total Size 510 MB (Initial Load takes time)</div>
                <ul class="list-disc mt-5 pl-5"> Upcoming features:
                    <li>Working days calculator (Under Development)</li>
                    <li>Provider portals directory (Under Development)</li>
                  </ul>
              </li>
            </ul>

            
            
            
            </div> 


           </div>
          
         
          
          
          </LiquidGlass>
  )
}

export default About