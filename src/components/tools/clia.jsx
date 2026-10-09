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
        className="Tint  flex flex-col md:m-5 min-h-[55vh] h-[60vh] rounded-lg ">
          CLIA Lookup (Beta)
          <div className='flex flex-col md:flex-row items-center'>
             <form className="flex flex-col items-center p-2" action="submit" onSubmit={handleCliaSubmit}>
           Search by CLIA ID: <input type="text" placeholder='Enter CLIA Number' onChange={(e)=>setCliaNumber(e.target.value)} className='outline-1 p-1 rounded-xl m-2' />
            <button type="submit" className='w-30 rounded-xl p-1 bg-black'>Submit</button>
        </form>
        <div>(or)</div>
         <form className="flex flex-col items-center p-2" action="submit" onSubmit={handleZipSubmit}>
           Search by Zip Code: <input type="text" placeholder='Enter Zip Code' onChange={(e)=>setZipCode(e.target.value)} className='outline-1 m-2 p-1 rounded-xl' />
            <button type="submit" className='w-30 rounded-xl p-1 bg-black'>Submit</button>
        </form>
          </div>
       
      <div className='flex flex-col items-center justify-center gap-2 p-4  overflow-y-auto h-[300px] w-full clia'>
        {results.map((item) => (
          <p className="singleclia m-2">
            <h3>Clia ID: {item.cliaIdNumber}</h3>
            <p> Facility Address: <br /> {item.address} <br /> {item.city}, {item.state} {item.zipCode}</p>
          <p>CLIA Effective date: {item.certificateEffectiveDate}</p>
           <h3>CLIA Expiration date: {item.certificateExpirationDate}</h3>
          </p>
        ))}
      </div>









    </LiquidGlass>
  )
}

export default Clia