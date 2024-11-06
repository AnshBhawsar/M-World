import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "./utils/axios";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Movie=()=>{
    const navigate=useNavigate();
    const [category,setCategory]=useState("now_playing")
    const [movie,setMovie]=useState([])
    const [page,setPage]=useState(1);
    const [hasMore,sethasMore]=useState(true);
    document.title="M_movie|movie"+category.toLocaleUpperCase()+"s"
    const getMovie=async()=>{
        try {
            const {data}=await axios.get(`/movie/${category}?page=${page}`);
           if(data.results.length>0){  setMovie((prevState)=>([...prevState,...data.results]));
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
        if(movie.length===0){
            getMovie();
        }
        else{
            setPage(1);
            setMovie([]);
            getMovie();
        }
       } 
       
       useEffect(()=>{
        refrenceHandler();
       },[category])
       return  movie ?<>
       <div className="trnav">
       <div className="tdr">
           <h1 className="hed">
           <i  onClick={()=>navigate(-1)}
           class="ri-arrow-left-line"></i>
           Movie<small className="sl">({category})</small>
           </h1>
           <div className="tn">
           <Topnav ></Topnav>
          </div>
          <div className="dro">
           <Dropdown title="category" options={['popular','top_rated','upcoming','now_playing']} func={(e)=>setCategory(e.target.value)} ></Dropdown>
          </div>
          
         
       </div>
       <InfiniteScroll
       dataLength={movie.length}
       next={getMovie}
      hasMore={true}
       Loader={<h1>loading...</h1>}
       >
       <Card data={movie} title="movie"/>
       </InfiniteScroll>
       
       </div>
       </>:(<Loading></Loading>)
}
export default Movie;