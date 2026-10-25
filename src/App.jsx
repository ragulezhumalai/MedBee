import { React, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Time from './components/Time.jsx'
import Hometab from './components/Hometab.jsx'
import './App.css'
import Balatro from './components/Balatronew.jsx'
import Tools from './components/tools.jsx'
import Insnumbers from './components/Insnumbers.jsx';
import About from './components/About.jsx';



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
  main= <About />
}
else if(tab==="Tools"){
  main= <Tools />
}
return (
  <div className="main relative isolate flex h-screen max-w-[100dvw] overflow-y-auto bg-black text-white">
    <Balatro
    null
      color1="#833EA3"
      color2="#FF9D33"
      color3="#000000"
      swirl={0.5}
      pixelSize={0}
      mouseInteraction={true}
      contrast={3}
      lighting={0.5}
      speed={0.5}
      rotationSpeed={1}
      scale={1.2}
      detail={3}
      crt={0}
      mouseStrength={1}
      clickSwirl={false}
      intro
      lightMode={false}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    />

    <div className="relative z-10 flex h-full w-full">
      <div>
        <NavBar switchTab={swi} />
      </div>
      {/* Time bar Section */}
      <div className="relative mx-3 mt-6 flex h-full w-[93dvw] flex-col sm:w-[98dvw]">
 
        <div className="my-5 flex max-w-[100%] items justify-center"><Time /></div>

        {/* Main Section */}

        <div className="mt-6 flex flex-col-reverse items-center justify-evenly p-2 scrollbar-hidden sm:max-h-[75dvh] md:flex-row">
          {tab === "About" ? null : <Insnumbers />}

          <div className="transits w-[100%] max-w-[90 dvw]">
            {main}
          </div>
        </div>
      </div>
    </div>
  </div>

)
}


    