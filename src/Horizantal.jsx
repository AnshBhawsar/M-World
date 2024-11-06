import "./App.css"
import Dropdown from "./Dropdown";
import "./index.css"
import { Link } from "react-router-dom";
import noImage from "/download.png"

 const Horizantal=({data})=>{
 
    return<>
    <div className="hnav">
    <div className="mal">
    
      {data.length>0 ? (data.map((d,i)=>(
        <Link to={`/${d.media_type}/detail/${d.id}`} key={i} className="conti">
         <img className="im" src={d.backdrop_path||d.profile_path?`https://image.tmdb.org/t/p/original${d.backdrop_path||d.profile_path}`:noImage}></img>
       <div className="hd">  <h1 className="de">{d.name||d.title||d.original_name||d.original_title}</h1>
         <p className="pa">{d.overview.slice(0,30)}...<span style={{color:' rgb(66, 59, 59);'}}>more</span></p></div>
        </Link> 
      )

      )) :<h1 className="ndf">Nothing to show</h1>}
   
    </div>
    </div>
    </>
 }
 export default Horizantal;