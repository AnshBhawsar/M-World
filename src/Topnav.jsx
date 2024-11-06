import axios from "./utils/axios";

import noImage from "/download.png"
import "./index.css"
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function Topnav(){
    const style={
        color: '#A1A1AA',
        fontSize:'20px'   
    };
    const st={
        color: '#A1A1AA',
        fontSize:'30px'
        
    }
const [query,setQuery]=useState(""); 
const [search,setSearch]=useState([]);
   const GetSearch=async()=>{
    try {
        const{data}=await axios.get(`/search/multi?query=${query}`);
       setSearch(data.results);
    } catch (error) {
        console.log("ERROR:",error);
    }
   }
   useEffect(()=>{
    GetSearch();
   },[query])

return <>
<div  className="tnav"> 
<i style={style} class=" ri-search-2-line"></i>
<input type="text" placeholder="search anything"className="in" onChange={(e)=>{setQuery(e.target.value)}} value={query} ></input>
{query.length>0 && (<i style={st}
onClick={()=>setQuery("")}class="ri-close-circle-line"></i>)

 }
<div className="link-container">
    {search.map((s,i)=>(
        <Link to={`/${s.media_type}/detail/${s.id}`} key={i}
         className="link">
            <img className="img" src={s.backdrop_path||s.profile_path?`https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path}`:noImage} alt=""></img>
            <span>
                {s.name||s.title||s.original_name||s.original_title}
            </span>
         </Link>
    ))}
      
    </div>
</div>

</>
}
export default Topnav;