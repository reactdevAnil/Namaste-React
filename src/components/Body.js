import React, { useState } from "react";
import RestrauntCard from "./RestrauntCard";
// import { RestrauntList } from "../utils/mockData";
import RestrauntList from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
   const [inputData,setInputData] = useState('')
   const [allRestraunts,setAllRestraunts] = useState(RestrauntList)
   const [filterRestrunts,setFilterRestrunts] = useState(RestrauntList)

   function filterData(input,allRestraunts){
    return allRestraunts.filter((restraunt)=>
    restraunt?.data?.name?.toLowerCase().includes(input.toLowerCase()))
   }
    return (filterRestrunts.length == 0) ? (<ShimmerUI />) : (
    <div className="body"> 
      <div className="search">
        <input type='text' className="input-box" value={inputData} onChange={(e)=>{setInputData(e.target.value)}} placeholder="Enter the Text"/>
        <button onClick={()=>{
            const data=filterData(inputData,allRestraunts)
            setFilterRestrunts(data)
        }}>Search</button>
      </div>
      <div className="res-container">
     {filterRestrunts.map((elems)=>{
      console.log("elems"+ elems.data)
  
      return(
        <RestrauntCard  resData={elems}/>
      )
     })}
    </div>
    </div>   
    )
};

export default Body;  