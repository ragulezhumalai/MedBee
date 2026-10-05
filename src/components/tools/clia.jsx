import React from 'react'
import cliadata from './cliaListings.json'


const Clia = () => {



async function getLaboratoryByCliaId(cliaId) {
  const response = await fetch("/cliaListings.json");

  if (!response.ok) {
    throw new Error(`JSON file not found: ${response.status}`);
  }

  const listings = await response.json();

  return listings.find((item) => item.cliaIdNumber === cliaId);
}

  return (
    <div className="outline-2 h-[200px]">
      Testing in process (CLIA Alpha)
        <form action="submit" onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted");
        }}>
            <input type="text" placeholder='Enter CLIA Number' className='' />
            <input type="text" placeholder='Enter Zip Code' className='' />
            <button type="submit" className=''>Submit</button>
        </form>









    </div>
  )
}

export default Clia