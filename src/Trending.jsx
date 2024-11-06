import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "./utils/axios";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Trending=()=>{
    const navigate=useNavigate();
    const [category,setCategory]=useState("all")
    const [duration,setDuration]=useState("day")
    const [trending,setTrending]=useState([])
    const [page,setPage]=useState(1);
    const [hasMore,sethasMore]=useState(true);
    document.title="M_movie|trending"+category.toLocaleUpperCase()+"s" 
    const getTrending=async()=>{
        try {
            const {data}=await axios.get(`/trending/${category}/${duration}?page=${page}`);
           if(data.results.length>0){  setTrending((prevState)=>([...prevState,...data.results]));
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
        if(trending.length===0){
            getTrending();
        }
        else{
            setPage(1);
            setTrending([]);
            getTrending();
        }
       } 
       
       useEffect(()=>{
        refrenceHandler();
       },[category,duration])
    return  trending ?<>
    <div className="trnav">
    <div className="tdr">
        <h1 className="hed">
        <i  onClick={()=>navigate(-1)}
        class="ri-arrow-left-line"></i>
        Trending
        </h1>
        <div className="tn">
        <Topnav ></Topnav>
       </div>
       <div className="dro">
        <Dropdown title="category" options={['tv','movie','all']} func={(e)=>setCategory(e.target.value)} ></Dropdown>
       </div>
       <div className="dtr">
       <Dropdown title="duration" options={['week','day']}func={(e)=>setDuration(e.target.value)}></Dropdown>
       </div>
      
    </div>
    <InfiniteScroll
    dataLength={trending.length}
    next={getTrending}
   hasMore={true}
    Loader={<h1>loading...</h1>}
    >
    <Card data={trending} title={category}/>
    </InfiniteScroll>
    
    </div>
    </>:(<Loading></Loading>)
}
export default Trending;