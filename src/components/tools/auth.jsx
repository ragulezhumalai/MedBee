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
      <ul className="grid grid-cols-2  md:grid-cols-5 gap-5 p-4 text-left overflow-hidden md:m-5 min-h-[47vh] h-[47vh] rounded-lg item-center">
        <li className=" Menu authtab flex items-center "><a href="https://www.cgsmedicare.com/medicare_dynamic/jc/pa/pa.aspx" target="_blank"> <img src={cgs} alt="CGS Medicare" className="sm:w-16 sm:h-16 m-2 mx-auto" /> CGS Medicare</a></li>
        <li className=" Menu authtab flex items-center  text-center"><a href="https://www.aetna.com/health-care-professionals/precertification/precertification-lists.html" target="_blank">  <img src={aetna} alt="Aetna" className="sm:w-16 sm:h-16 m-2 mx-auto" /> </a><div>Aetna</div></li>
        <li className=" Menu authtab flex items-center text-center"><a href="https://provider.healthybluemo.com/missouri-provider/resources/precertification-lookup" target="_blank"> <img src={anthem} alt="Anthem" className="sm:w-16 sm:h-16 m-2 mx-auto" /> </a><div>Anthem Missouri</div></li>
        <li className=" Menu authtab flex items-center text-center"><a href="https://providers.anthem.com/wisconsin-provider/claims/prior-authorization-lookup-tool" target="_blank"> <img src={anthem} alt="Anthem" className="sm:w-16 sm:h-16 m-2 mx-auto" /> </a><div>Anthem Wisconsin</div></li>
        <li className=" Menu authtab flex items-center  text-center"><a href="https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorizations-search-tool" target="_blank">  <img src={humana} alt="Humana" className="sm:w-16 sm:h-16 m-2 mx-auto" /> </a><div>Humana</div></li>
        <li className=" Menu authtab flex items-center text-center"><a href="https://www.alliancehealthplan.org/providers/procedure-code-lookup-tool/" target="_blank"> <img src={alliance} alt="Alliance Health" className="sm:w-16 sm:h-16 m-2 mx-auto" /> </a><div>Alliance Health</div></li>
         <li className=" Menu authtab flex items-center text-center"><a href="https://www.wellcare.com/en/authorization-lookup" target="_blank"> <img src={wellcare} alt="Wellcare" className="sm:w-16 sm:h-16 m-2 mx-auto" /> </a><div>Wellcare</div></li>
          <li className=" Menu authtab flex items-center text-center"><a href="https://www.molinahealthcare.com/providers/ca/medicaid/palookup" target="_blank"> <img src={molina} alt="Molina Healthcare" className="sm:w-16 sm:h-16 m-2 mx-auto" /> </a><div>Molina Healthcare</div></li>
   


      </ul>
    </LiquidGlass>
  )
}

export default auth