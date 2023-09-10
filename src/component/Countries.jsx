
import  { useEffect, useState } from 'react';
import Country from './Countries/Country';


const Countries = () => {
    const [data,setdata]=useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlag] = useState([])

    const handlevisitedCountries = (data) =>{
        const newVisitedCountries = [...visitedCountries,data];
        setVisitedCountries(newVisitedCountries) ;
    }
    const handlevisitedCountriesFlag = (flag) =>{
        const newVisitedCountriesFlag = [...visitedFlags,flag];
        setVisitedFlag(newVisitedCountriesFlag);
    }
    // remove any element from an array in a state 



useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setdata(data))
},[]);
    return (
        <>
         <h2 className=' mb-10 text-xl font-bold'>Total Countries :{data.length}</h2>
         <div>
            <h5 className=' text-lg font-bold'>Visited Countries : {visitedCountries.length}</h5>
            <ul>
            {
                visitedCountries.map(country=><li key={country.cca3} className='font-semibold'>{country?.name?.common}</li>)
            }
            </ul>
         </div>
         <div>
            {
                visitedFlags.map((flag,idx)=><img src={flag} key={idx} className=' w-20 mb-10'></img>)
            }
         </div>
        <div className='grid grid-cols-3 gap-5'>
          
            {
               data.map(country=><Country key={country.cca3} handlevisitedCountriesFlag ={handlevisitedCountriesFlag } handlevisitedCountries={handlevisitedCountries} country={country}></Country>)
            }
        </div>
        
        </>
       
    );
};

export default Countries;