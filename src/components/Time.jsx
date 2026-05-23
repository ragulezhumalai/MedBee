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
     <LiquidGlass
     borderRadius={20}
        blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2.3}
        elasticity={1}
        displacementScale={2}
         className=" flex my-6 sm:w-auto gap-6 py-2 border-1 inset-shadow-white  border-white border-white/30 top-10">
      {Object.entries(zones).map(([label, zone]) => (
        <div key={label} className="text-center px-2">
          <div className="text-m font-semibold ">{label}</div>
          <div className="text-m opacity-70">
            {formatTime(zone)}
          </div>
        </div>
      ))}
    </LiquidGlass>
  );
}
