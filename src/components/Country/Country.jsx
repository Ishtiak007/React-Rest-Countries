import PropTypes from 'prop-types';
import { useState } from 'react';
const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    const [visited,setVisited]=useState(false)
    const handleVisited =()=>{
        setVisited(!visited)
    }
    const {name,flags,population,area,cca3,capital}=country;
    return (
        <div className={`shadow-2xl border-[2px] rounded-lg ${visited &&"bg-green-200"}`}>
            <img className='w-full h-[180px] rounded-lg' src={flags.png} alt="" />
            <p><small className='p-[4px] text-white font-bold bg-gray-500 rounded-xl'>Code : {cca3}</small></p>
            <h3 className='font-semibold text-2xl my-3 text-center'>Name : {name.common}</h3>
            <h3 className='text-center text-red-700 my-4'>{name.official}</h3>
            <div className='flex justify-evenly'>
            <p className='text-[19px]'>Population : {population}</p>
            <p className='text-[19px]'>Area: {area}</p>        
            </div>
           <h3 className='text-center my-6 text-lg text-slate-700 font-medium'>Capital City: {capital}</h3>
           <button onClick={()=>handleVisitedCountry(country)} className='bg-blue-800 text-white font-bold px-[4px] py-1 rounded-md m-3'>Mark As Visited</button>
           <button onClick={handleVisited} className='bg-red-700 text-white font-bold px-[4px] py-1 rounded-md m-3'>{visited ? "Visited":"Want To Go"}</button>
           {/* {
            visited ? "I have visited this country": "I want to visit"
           } */}
           <button onClick={()=>handleVisitedFlag(country.flags.png)} className='bg-sky-700 text-white font-bold px-[4px] py-1 rounded-md m-3'>Visited Flag</button>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object.isRequired,
    handleVisitedCountry : PropTypes.object
  };

export default Country;