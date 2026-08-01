import React from 'react'
import {useState, useEffect} from 'react'
import {LiquidGlass} from '@liquidglass/react'

export default function Time() {
  
const zones = {
  IST: "Asia/Kolkata",
  CST: "America/Chicago",
  EST: "America/New_York",
  PST: "America/Los_Angeles",
};
 const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (zone) =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(now);


  return (
     <div className='p-0 m-0  max-w-[95%]'>  <LiquidGlass
     borderRadius={30}
        blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2.3}
        elasticity={1}
        displacementScale={2}
         className=" max-w-full border-white/30 top-10 ">
          <div className="inset m-0 py-3 flex">
      {Object.entries(zones).map(([label, zone]) => (
        <div key={label} className=" optionhover text-center sm:mx-15 px-2">
          <div className="text-m font-semibold font">{label}</div>
          <div className="text-m opacity-70">
            {formatTime(zone)}
          </div>
        </div>
        
      ))}
      </div>
    </LiquidGlass>
    </div>
  );
}
