import "./index.css"
import React, { useEffect, useState } from "react";
import Slidenav from "./Slidenav";
import Topnav from "./Topnav.jsx";
import Header from "./Header.jsx";
import axios from "./utils/axios";
import Horizantal from "./Horizantal.jsx";
import Dropdown from "./Dropdown.jsx";
import Loading from "./Loading.jsx";

function Home(){
   
    document.title="HOMEPAGE";
   
    const [wallpeaper,setWallpeaper]=useState(null);
    const [trending,setTrending]=useState(null);
    const [category,setCategory]=useState("all");
    const getWallpeaper=async()=>{
        try {
            const{data}=await axios.get(`/trending/all/day`);
            let randomData=data.results[(Math.random()*data.results.length).toFixed()]
           setWallpeaper(randomData);
        } catch (error) {
            console.log("ERROR:",error);
        }
       }
       const getTrending=async()=>{
        try {
            const{data}=await axios.get(`/trending/${category}/day`);
           
           setTrending(data.results);
        } catch (error) {
            console.log("ERROR:",error);
        }
       }
       
       useEffect(()=>{
        getTrending();
        !wallpeaper && getWallpeaper();
        
       },[category])
     
    return wallpeaper && trending ?(<>
   <Slidenav></Slidenav>
   <div className="rnav">
    <Topnav></Topnav>
    <Header data={wallpeaper}></Header>
    <div className="hcon">
    <h1 className="heading">trending</h1>
    <Dropdown title="Filter" options={['tv','movie','all']} func={(e)=>setCategory(e.target.value)}/>
      
      </div>
     
    <Horizantal data={trending} ></Horizantal>
    </div>
    
   
   
    </>
    ):<Loading></Loading>
}
export default Home;