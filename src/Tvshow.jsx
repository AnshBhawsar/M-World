import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "./utils/axios";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshow=()=>{
    const navigate=useNavigate();
    const [category,setCategory]=useState("airing_today")
    const [tvshow,settvShow]=useState([])
    const [page,setPage]=useState(1);
    const [hasMore,sethasMore]=useState(true);
    document.title="M_movie|tv show"+category.toLocaleUpperCase()+"s"
    const gettvShow=async()=>{
        try {
            const {data}=await axios.get(`/tv/${category}?page=${page}`);
           if(data.results.length>0){  settvShow((prevState)=>([...prevState,...data.results]));
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
        if(tvshow.length===0){
            gettvShow();
        }
        else{
            setPage(1);
            settvShow([]);
            gettvShow();
        }
       } 
       useEffect(()=>{
        refrenceHandler();
       },[category])
       return  tvshow ?<>
       <div className="trnav">
       <div className="tdr">
           <h1 className="hed">
           <i  onClick={()=>navigate(-1)}
           class="ri-arrow-left-line"></i>
           Tv show<small className="sl">({category})</small>
           </h1>
           <div className="tn">
           <Topnav ></Topnav>
          </div>
          <div className="dro">
           <Dropdown title="category" options={['on_the_air','popular','top_rated','airing_today']} func={(e)=>setCategory(e.target.value)} ></Dropdown>
          </div>
          
         
       </div>
       <InfiniteScroll
       dataLength={tvshow.length}
       next={gettvShow}
      hasMore={true}
       Loader={<h1>loading...</h1>}
       >
       <Card data={tvshow} title="tv"/>
       </InfiniteScroll>
       
       </div>
       </>:(<Loading></Loading>)
}
export default Tvshow;