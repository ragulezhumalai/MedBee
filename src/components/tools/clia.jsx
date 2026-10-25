import {useState} from 'react';
import cliaData from './cliaListings.json'
import {LiquidGlass} from '@liquidglass/react'


const Clia = () => {

const [cliaNumber, setCliaNumber]= useState("");
const [zipCode, setZipCode]= useState("");
const [results, setResults]= useState([]);



  
 const handleCliaSubmit =  (e) =>{
  e.preventDefault();
  setResults(cliaData.filter((item)=>item.cliaIdNumber === cliaNumber.trim()))
}

const handleZipSubmit =  (e) =>{
  e.preventDefault();
  setResults(cliaData.filter((item)=>item.zipCode === zipCode.trim()))
}

  return (
    <LiquidGlass
           borderRadius={30}
        blur={3.0}
        contrast={1}
        brightness={1}
        saturation={2}
        elasticity={1}
        displacementScale={2}
        className="Tint mueOutput flex flex-col min-h-[55vh] text-xs h-[60vh] rounded-lg ">
        <p className="text-2xl mt-5 font-extrabold">CLIA Lookup</p>
          <div className='flex flex-col md:flex-row items-center'>
              
             <form className="flex flex-col items-center p-2" action="submit" onSubmit={handleCliaSubmit}>
           Search by CLIA ID: <input type="text" placeholder='Enter CLIA Number' onChange={(e)=>setCliaNumber(e.target.value)} className=' border-5 outline-1 outline-blue-100/70 border-blue-100/50 hover:shadow-[0_0_20px_rgba(59,250,246)] transition duration-200 placeholder:text-sm placeholder:text-center p-1 rounded-3xl m-2' />
            <button type="submit" className='w-30 inset rounded-xl p-1 todo-btn '>Search</button>
        </form>
        <div>(or)</div>
         <form className="flex flex-col items-center p-2" action="submit" onSubmit={handleZipSubmit}>
           Search by Zip Code: <input type="text" placeholder='Enter Zip Code' onChange={(e)=>setZipCode(e.target.value)} className='border-5 outline-1 outline-blue-100/70 border-blue-100/50 hover:shadow-[0_0_20px_rgba(59,250,246)] transition duration-200 placeholder:text-sm placeholder:text-center p-1 rounded-3xl m-2' />
            <button type="submit" className='w-30  rounded-xl p-1 todo-btn'>Search</button>
        </form>
          </div>
       
      <div className='flex flex-col items-center gap-2 overflow-y-auto h-[250px] w-full clia'>
        {results.map((item) => (
          <p className="singleclia ">
            <h3 className="font-bold">Clia ID: {item.cliaIdNumber}</h3>
            <p> Facility Address: <br /> {item.address} <br /> {item.city}, {item.state} {item.zipCode}</p>
          <p>CLIA Effective date: {item.certificateEffectiveDate}</p>
           <h3>CLIA Expiration date: {item.certificateExpirationDate}</h3>
          </p>
          
        ))}
      </div>







<p className="text-xs text-center my-2">
  Official data derived from QCOR(qcor.cms.gov)</p>

    </LiquidGlass>
  )
}

export default Clia