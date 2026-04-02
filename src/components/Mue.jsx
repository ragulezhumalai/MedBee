import {React,useState} from 'react';
import Muedata from '../mueData.json';
import { LiquidGlass } from '@liquidglass/react';

const Mue = () => {
  const [cpt,setCpt]=useState('');
  const [output,setOutput]=useState(null);


const getMue=(e)=>{
e.preventDefault()
const code=cpt.trim().toUpperCase()

if(!code){
  setOutput('Please enter a valid CPT code.');
return;
}

const result=Muedata.codes[code]

if(result){
  console.log(result)
  setOutput(result);
}else{
  setOutput('No MUE data found')
  console.log(output)
}



}

  return (
    <LiquidGlass 
        blur={2}
        
        contrast={1.2}
        brightness={1.1}
        saturation={2.0}
        elasticity={0.50}
        displacementScale={1}
    className='mt-4 md:m-5  min-h-[50vh] h-[40vh] rounded-lg flex flex-col  outline-2 outline-white/30  md:w-[70%]'>
      <div className='text-center font-bold'>MUE Edits Lookup</div>

      <form onSubmit={getMue} className='p-4 m-5'>
    <input type="text" onChange={e=>setCpt(e.target.value)} className='outline p-2 m-2 rounded-3xl text-center font-bold' />
    <button
    type="submit" className=' rounded-4xl p-2 bg-white text-blue-400 '>Search</button>

</form>
<div className="mt-4 text-center">
        {output?.mue && (
          <>
            <p>
              <b>MUE Value:</b> {output.mue}
            </p>
            <p>
              <b>MAI Indicator:</b> {output.adjudicationIndicator}
            </p>
          </>
        )}

        {output?.error && (
          <p className="text-red-400">{output.error}</p>
        )}
      </div>
    </LiquidGlass>
  )
}

export default Mue