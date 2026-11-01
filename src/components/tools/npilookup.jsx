import {useState} from 'react'
import {LiquidGlass} from '@liquidglass/react'

const Npilookup = () => {
const [npi,setNpi]=useState('')
const [lookup,setLookup] =useState('')
const [result, setResult]=useState('')



  const handleSubmit= async (e)=>{
e.preventDefault()

  try {
const response = await fetch(`https://npiradar.com/api/npi/${npi}`) 

    if (!response.ok){
      throw new Error('api request failed')
    }
  const data = await response.json()
  setResult(data)
  }
    catch (error){
      setLookup(error.message)
    }
   console.log(result)
    
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
        className='flex flex-col min-h-[30vh]'>
          <p className='text-2xl'>NPI Lookup (beta)</p>
          <div className='m-1'>
      <form onSubmit={handleSubmit}>
        <input type="text" className='border-5 outline-1 outline-blue-100/70 border-blue-100/50 hover:shadow-[0_0_20px_rgba(59,250,246)] transition duration-200 placeholder:text-sm placeholder:text-center p-1 rounded-3xl m-2' onChange={(e)=>{setNpi(e.target.value)}}/>
        <button className="w-30  rounded-xl p-1 todo-btn" type="submit">Search</button>
      </form>
</div>
      <div className='m-1'>
        <p>Name : {result.name}</p>
        <p>Npi Type : {result.entityType}</p>
        <p>Enumeration date : {result.enumerationDate}</p>
        <p>Specility : {result.specialty}</p>
        <p>Taxonomy : {result.taxonomyCode}</p>
         <p>
          <ul>
            Practice Address
            <li>Address line 1: {result?.practiceLocation?.address1}</li>
            <li> Adress line 2: {result?.practiceLocation?.address2} </li>
            <li> City: {result?.practiceLocation?.city} </li>
            <li>{result?.practiceLocation?.state} </li>
            <li>Zip: {result?.practiceLocation?.zip}</li>
          </ul>
         </p>
      </div>

    </LiquidGlass>
  )
}

export default Npilookup