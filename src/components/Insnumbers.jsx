import { LiquidGlass } from '@liquidglass/react';
import React from 'react'

const insurancePhones = {
  "1199 Seiu": "8888191199",
  "800-638-2972": "8889007475",
  "AAA - Mid Atlantic": "8883352722",
  "AARP": "18002277789",
  "Access Medicare": "8776961116",
  "Aetna": "18006240756",
  "Aetna Better Health – NJ": "18552323596",
  "Aetna Hmo": "8006240756",
  "Aetna Student Health Plan": "8774097358",
  "AETNA US HEALTHCARE": "18005416711",
  "Affinity HealthPlan": "8662475678",
  "AHC aetna": "18886246290",
  "AIG": "8006031785",
  "Alicare": "8003526465",
  "all blue card (out of state)": "8665940521",
  "all savers": "18002912634",
  "Allied Benefits": "3129068080",
  "Allied Industries": "2155641739",
  "AllState": "8887103483",
  "AllState": "8008187610",
  "AMA Insurance Agency Inc": "8886275883",
  "AMERICHOICE MD HMO": "8883623368",
  "Americhoice of NJ": "8883623368",
  "Amerigroup": "18006004441",
  "Amerigroup (Medicare)": "8668054589",
  "AMERIGROUP Community": "8006004441",
  "Amerihealth": "18002752583",
  "Angeles IPA": "8008326334",
  "Anthem BCBS": "8002821016",
  "Anthem BCBS Of CA": "8005517265",
  "APWU Health Plan": "8002222798",
  "ATLANTIS HEALTH PLAN": "8667478422",
  "Bankers Life and Casualty": "8006213724",
  "BCBS of MI": "18004823146",
  "BCBS of NJ": "18006244758",
  "Blue card": "18004299886",
  "BCBS FL": "8006245078",
  "Bravo": "8669488759",
  "Care Core wellcare": "8004203471",
  "Careconnect": "8557067545",
  "Caremark": "8003246331",
  "caresource": "8004880134",
  "Champva": "8007338387",
  "Cigna": "18005221246",
  "Cigna great west": "8664942111",
  "Clover Health": "18778538019",
  "Compsych": "8008511714",
  "CoreSource": "8002233943",
  "Coventry": "8007888445",
  "Crystal run health plan": "8446386507",
  "DC Medicaid": "2029068319",
  "Diamond Plan": "8665335154",
  "Easy Choice Health Plan": "8669993945",
  "Emblem Health": "8778423625",
  "Empire bcbs": "8004508753",
  "Evergreen": "8559783282",
  "Federal Blue Cross PPO": "8006245078",
  "Fidelis care of NY": "8883433547",
  "first health": "18002265116",
  "Florida Health Care Plan": "8003529824",
  "GEHA": "8008216136",
  "Geico Insurance": "8003011390",
  "GHI": "2125014444",
  "Great West": "8664942111",
  "Hartford": "8003273636",
  "Health First Health Plan": "8445225282",
  "Health Net CA": "8006417761",
  "Health Partners": "8004444558",
  "HIP Medicaid HMO": "8004478255",
  "Horizon BCBS": "18006241110",
  "Humana": "8005584444",
  "Kaiser": "8003903510",
  "Magnacare": "8002357267",
  "Medicaid NJ": "18007766334",
  "Medicaid NY": "8003439000",
  "Medicare NJ": "18772358073",
  "Medicare NY": "8668370241",
  "Molina health care": "8664724585",
  "Multiplan": "8005463887",
  "Optum": "8008649084",
  "Oscar insurance": "8556722755",
  "Oxford": "8006661353",
  "Progressive insurance": "8552431331",
  "State compensation": "8882223211",
  "Tricare": "8778742273",
  "United Health Care (UHC)": "8663623368",
  "UPMC": "8669181595",
  "Wellcare": "8884532534",
  "Wellcare NJ": "8556656523",
  "Wellcare NY": "8002785155",
  "ZURICH NORTH AMERICA": "8772463478"
};



const Insnumbers = () => {


  return (
    <div className="flex-col relative justify-between py-3 md:w-[30%]  my-6 px-1 h-[55vh] overflow-y-auto border-2 rounded-2xl border-white/30 scrollbar-hide">
       <div className=' w-[90%] mx-4 text-center z-999'>Insurance Phone Numbers</div>
        <ul >
      {Object.entries(insurancePhones).map(([name, phone]) => (
        <LiquidGlass 
        blur={5}
        brightness={1}
        saturation={2.3}
        displacementScale={2}
        shadowIntensity={0.5}

        className='my-2 z-10 py-3 border-1 border-white border-white/30 text-sm bg-[rgba(0, 0, 0, 0.5)]' key={name}>
          <strong>{name}</strong> : {phone}
        </LiquidGlass>
      ))}
    </ul>
    </div>
    
  )
}

export default Insnumbers