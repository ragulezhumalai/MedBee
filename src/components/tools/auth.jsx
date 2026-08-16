import React from 'react'
import { LiquidGlass } from '@liquidglass/react';
import humana from '../../assets/authlogo/Humana.png'
import cgs from '../../assets/authlogo/cgs.png'
import aetna from '../../assets/authlogo/Aetna.png'
import anthem from '../../assets/authlogo/Anthem.png'
import alliance from '../../assets/authlogo/Alliance.png'
import wellcare from '../../assets/authlogo/Wellcare.png'
import molina from '../../assets/authlogo/Molina.png'

const auth = () => {
  return (
    <LiquidGlass
    borderRadius={30}
        blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2}
        elasticity={1}
        displacementScale={2}
        className='Tint mueOutput    min-h-[50%] h-[50%] rounded-lg flex flex-col  outline-2 outline-white/30  md:w-[60%]'>
          Auth Lookup Tools
      <ul className="grid grid-cols-2  md:grid-cols-5 gap-5 p-4 text-left overflow-hidden w-[95%] h-[90%] item-center"> 
        <li className=" Menu authtab text-center"><a href="https://www.cgsmedicare.com/medicare_dynamic/jc/pa/pa.aspx" target="_blank"> <img src={cgs} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" /> CGS Medicare</a></li>
        <li className=" Menu authtab  text-center"><a href="https://www.aetna.com/health-care-professionals/precertification/precertification-lists.html" target="_blank">  <img src={aetna} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" /> Aetna</a></li>
        <li className=" Menu authtab  text-center"><a href="https://provider.healthybluemo.com/missouri-provider/resources/precertification-lookup" target="_blank"> <img src={anthem} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" /> Anthem Missouri</a></li>
        <li className=" Menu authtab  text-center"><a href="https://providers.anthem.com/wisconsin-provider/claims/prior-authorization-lookup-tool" target="_blank"> <img src={anthem} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" /> Anthem Wisconsin</a></li>
        <li className=" Menu authtab  text-center"><a href="https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorizations-search-tool" target="_blank">  <img src={humana} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" />Humana</a></li>
        <li className=" Menu authtab  text-center"><a href="https://www.alliancehealthplan.org/providers/procedure-code-lookup-tool/" target="_blank"> <img src={alliance} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" />Alliance Health</a></li>
         <li className=" Menu authtab  text-center"><a href="https://www.wellcare.com/en/authorization-lookup" target="_blank"> <img src={wellcare} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" />Wellcare</a></li>
          <li className=" Menu authtab  text-center"><a href="https://www.molinahealthcare.com/providers/ca/medicaid/palookup" target="_blank"> <img src={molina} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" />Molina Healthcare</a></li>
   


      </ul>
    </LiquidGlass>
  )
}

export default auth