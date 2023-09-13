
import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries, setVisitedCountries]=useState([]);
    const [visitedFlag, setVisitedFlag]=useState([]);
    useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all")
      .then((res)=>res.json())
      .then((data)=>setCountries(data))
    },[])
    const handleVisitedCountry=(country)=>{
        const newCountry = [...visitedCountries,country]
        setVisitedCountries(newCountry)
    }
    const handleVisitedFlag=(falg)=>{
        const newFlag = [...visitedFlag,falg];
        setVisitedFlag(newFlag)
    }
    return (
    <div className="max-w-7xl mx-auto">
         <h1 className='text-center text-4xl my-10'>React Rest Countries</h1>
         <div>
            <h4 className="text-xl bg-red-200 inline-block p-3 rounded-md">Visited Country: {visitedCountries.length}</h4>
            <ul>
                {
                    visitedCountries.map((country)=><li className="inline-block" key={country.cca3}><h1 className="bg-gray-700 w-[120px] rounded-md p-3 m-3 text-white font-medium">{country.name.common}</h1></li>)
                }
            </ul>
         </div>
         <div>
            {
                visitedFlag.map((flag,idx)=><img className="w-[100px] h-[50px] inline-block m-3" key={idx} src={flag}></img>)
            }
         </div>
        <h3 className='text-center text-2xl my-4 bg-blue-900 text-white font-medium p-5 rounded-md'>Countries : {countries.length}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10 ">
            {
                countries.map((country)=><Country handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} key={country.cca3} country={country}></Country>)
            }
        </div>
    </div>
    );
};

export default Countries;