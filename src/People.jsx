import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "./utils/axios";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const People=()=>{
    const navigate=useNavigate();
    const [category,setCategory]=useState("popular")
    const [person,setPerson]=useState([])
    const [page,setPage]=useState(1);
    const [hasMore,sethasMore]=useState(true);
    document.title="M_movie|people"+category.toLocaleUpperCase()+"s"
    const getPerson=async()=>{
        try {
            const {data}=await axios.get(`/person/${category}?page=${page}`);
           if(data.results.length>0){  setPerson((prevState)=>([...prevState,...data.results]));
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
        if(person.length===0){
            getPerson();
        }
        else{
            setPage(1);
            setPerson([]);
            getPerson();
        }
       } 
       useEffect(()=>{
        refrenceHandler();
       },[category])

     return person ?<>
       <div className="trnav">
       <div className="tdr">
           <h1 className="hed">
           <i  onClick={()=>navigate(-1)}
           class="ri-arrow-left-line"></i>
           People
           </h1>
           <div className="tn">
           <Topnav ></Topnav>
          </div>
         
         
       </div>
       <InfiniteScroll
       dataLength={person.length}
       next={getPerson}
      hasMore={true}
       Loader={<h1>loading...</h1>}
       >
       <Card data={person} title="person"/>
       </InfiniteScroll>
       
       </div>
       </>:(<Loading></Loading>)
}
export default People