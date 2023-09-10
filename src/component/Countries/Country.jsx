import { useState } from "react";

const Country = ({country,handlevisitedCountries,handlevisitedCountriesFlag }) => {
    const {name} = country ;

    const [visited,setVisited] = useState(false);

    const visitedHandler = ()=>{
        setVisited(!visited);
     
    }

    return (
        <div className={`${visited?' bg-slate-600 text-white':'white'}  border-red-400 border-2 rounded mb-5 p-5`}>
            <h3 className=" font-bold">Name : {name?.common}</h3>
            <img src={country.flags.png} alt="" className=" h-48 w-80"/>
            {/* <img src={country.flags.svg} alt="" /> */}
            <h4>{country.idd.independent}</h4>
            <h5 className=" font-semibold">Population : {country.population}</h5>
            <p><small>Code : {country.cca3}</small></p>
            <button className="px-6 py-1 rounded  bg-orange-500 mb-3" onClick={()=>handlevisitedCountries(country)}>Mark Visited</button> <br />
            {/* <button className=" bg-slate-700 px-6 py-1 rounded text-white" onClick={visitedHandler}>Visited</button> */}
            <button className={` ${visited?' bg-blue-800' : ' bg-gray-700'} px-6 py-1 rounded text-white`} onClick={visitedHandler}>Visited</button>
            {visited? "Yes":"No"} <br />
            <button className="px-6 py-1 rounded bg-red-800 text-white mt-3" onClick={()=>handlevisitedCountriesFlag (country.flags.png)}>Flag</button>
        </div>
    );
};

export default Country;