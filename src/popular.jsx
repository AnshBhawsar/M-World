import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "./utils/axios";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Popular=()=>{
    const navigate=useNavigate();
    const [category,setCategory]=useState("movie")
    const [popular,setPopular]=useState([])
    const [page,setPage]=useState(1);
    const [hasMore,sethasMore]=useState(true);
    document.title="M_movie|popular"+category.toLocaleUpperCase()+"s" 
    const getPopular=async()=>{
        try {
            const {data}=await axios.get(`${category}/popular?page=${page}`);
           if(data.results.length>0){  setPopular((prevState)=>([...prevState,...data.results]));
            setPage(page+1);
           }
           else{
            sethasMore(false);
           }
         
          
           console.log(data)
        } catch (error) {
            console.log("ERROR:",error);
        }
       }
       const refrenceHandler=()=>{
        if(popular.length===0){
            getPopular();
        }
        else{
            setPage(1);
            setPopular([]);
            getPopular();
        }
       } 
       
       useEffect(()=>{
        refrenceHandler();
       },[category])
       return  popular ?<>
       <div className="trnav">
       <div className="tdr">
           <h1 className="hed">
           <i  onClick={()=>navigate(-1)}
           class="ri-arrow-left-line"></i>
           Popular
           </h1>
           <div className="tn">
           <Topnav ></Topnav>
          </div>
          <div className="dro">
           <Dropdown title="category" options={['tv','movie']} func={(e)=>setCategory(e.target.value)} ></Dropdown>
          </div>
          
         
       </div>
       <InfiniteScroll
       dataLength={popular.length}
       next={getPopular}
      hasMore={true}
       Loader={<h1>loading...</h1>}
       >
       <Card data={popular} title={category}/>
       </InfiniteScroll>
       
       </div>
       </>:(<Loading></Loading>)
}
export default Popular;