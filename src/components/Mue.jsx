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
        blur={3}
        
        contrast={1.2}
        brightness={1.1}
        saturation={2.0}
        elasticity={0.50}
        tintColor="#162325"
        displacementScale={1}
      
    className='mueOutput mt-4 md:m-5 min-h-[55vh] h-[60vh] rounded-lg flex flex-col  outline-2 outline-white/30  md:w-[70%]'>
      <div className='text-center font-bold text-2xl'><span className='text-3xl'>MUE</span><br></br>  Edits Lookup</div>

      <form onSubmit={getMue} className='p-4 m-5 flex'>
    <input type="text" onChange={e=>setCpt(e.target.value)} className='border-7 border-blue-100/50 hover:shadow-[0_0_20px_rgba(59,250,246)] transition duration-200  outline-1 outline-blue-100/70 p-2 m-2 rounded-3xl text-center font-bold' />
    <button
    children
    zIndex={2}
    type="submit"  className=' rounded-4xl p-1 text-blue-400 '> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24">
<linearGradient id="hBcdOHj0tpNmQcPjQ7iiFa_WwWusvLMTFd7_gr1" x1="4.696" x2="21.274" y1="4.696" y2="21.274" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".6"></stop><stop offset="1" stop-color="#fff" stop-opacity=".3"></stop></linearGradient><path fill="url(#hBcdOHj0tpNmQcPjQ7iiFa_WwWusvLMTFd7_gr1)" d="M21.414,18.586c-0.287-0.287-1.942-1.942-2.801-2.801l0,0C19.487,14.398,20,12.76,20,11 c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,4.971,4.029,9,9,9c1.761,0,3.398-0.513,4.785-1.387c0,0,0,0,0,0 c0.859,0.859,2.514,2.514,2.801,2.801c0.781,0.781,2.047,0.781,2.828,0C22.195,20.633,22.195,19.367,21.414,18.586z M11,16 c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S13.761,16,11,16z"></path><g><linearGradient id="hBcdOHj0tpNmQcPjQ7iiFb_WwWusvLMTFd7_gr2" x1="4.636" x2="21.414" y1="4.636" y2="21.414" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".6"></stop><stop offset=".493" stop-color="#fff" stop-opacity="0"></stop><stop offset=".997" stop-color="#fff" stop-opacity=".3"></stop></linearGradient><path fill="url(#hBcdOHj0tpNmQcPjQ7iiFb_WwWusvLMTFd7_gr2)" d="M11,2.5c4.687,0,8.5,3.813,8.5,8.5 c0,1.595-0.453,3.158-1.31,4.518l-0.213,0.338l0.282,0.282l2.801,2.801C21.344,19.223,21.5,19.599,21.5,20 c0,0.401-0.156,0.777-0.439,1.061C20.777,21.344,20.401,21.5,20,21.5s-0.777-0.156-1.061-0.439l-2.801-2.801l-0.282-0.282 l-0.338,0.213C14.158,19.047,12.595,19.5,11,19.5c-4.687,0-8.5-3.813-8.5-8.5S6.313,2.5,11,2.5 M11,16.5 c3.033,0,5.5-2.467,5.5-5.5S14.033,5.5,11,5.5S5.5,7.967,5.5,11S7.967,16.5,11,16.5 M11,2c-4.971,0-9,4.029-9,9 c0,4.971,4.029,9,9,9c1.761,0,3.398-0.513,4.785-1.387c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.859,0.859,2.514,2.514,2.801,2.801 C18.976,21.805,19.488,22,20,22c0.512,0,1.024-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828 c-0.287-0.287-1.942-1.942-2.801-2.801C19.487,14.398,20,12.76,20,11C20,6.029,15.971,2,11,2L11,2z M11,16c-2.761,0-5-2.239-5-5 c0-2.761,2.239-5,5-5c2.761,0,5,2.239,5,5C16,13.761,13.761,16,11,16L11,16z"></path></g>
</svg></button>

</form>
<div className=" mt-4 text-center">
        {output?.mue && (
            <div className="mueOutput">
            <p> 
              <b>MUE Value:</b> {output.mue}
            </p>
            <p>
              <b>MAI Indicator:</b> {output.adjudicationIndicator}
            </p>
          </div>
        )}

        {output?.error && (
          <p className="text-red-400">{output.error}</p>
        )}
      </div>
    
    </LiquidGlass>
  )
}

export default Mue