import React from 'react'
import {useState} from 'react';
import cliadata from './cliaListings.json'


const Clia = () => {
const [cliaNumber, setCliaNumber]= useState("");
const [zipCode, setZipCode]= useState("");
const [results, setResults]= useState([]);
const [searched, setSearched]= useState(false);

console.log(cliaNumber)

 const handleSubmit =  () =>{

}

  return (
    <div className="outline-2 h-[300px] p-5">
      Testing in process (CLIA Alpha)
        <form className="flex flex-col items-center p-2" action="submit" onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
        }}>
           CLIA ID: <input type="text" placeholder='Enter CLIA Number' onChange={(e)=>setCliaNumber(e.target.value)} className='outline-1 p-1 rounded-xl m-2' />
           Zip Code: <input type="text" placeholder='Enter Zip Code' className='outline-1 m-2 p-1 rounded-xl' />
            <button type="submit" className='w-30 rounded-xl p-1 bg-black'>Submit</button>
        </form>









    </div>
  )
}

export default Clia