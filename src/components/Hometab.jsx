import React from 'react'
import Mue from './Mue.JSX';
import Insnumbers from './Insnumbers.jsx';

const Hometab = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse m-4=2 justify-between'>
      <Mue />
      <Insnumbers />
    </div>
  )
}

export default Hometab