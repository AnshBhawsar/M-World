import {Link} from "react-router-dom"
import React from "react";
import "./index.css";
const Header=({data})=>{
    console.log(data);
return<>
<div style={{background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
   backgroundPosition:'center',
   backgroundSize:'cover',  
   height:'100%',
   width:'100%',   
   backgroundRepeat:'no-repeat'}} 
   

className="header">
    <h1 className="mname">{data.name||data.title||data.original_name||data.original_title}</h1>
    <p className="para">{data.overview.slice(0,200)}...<Link  to={`${data.media_type}/detail/${data.id}`}  style={{color:'#4d4dff'}}>more</Link></p>
    <p className="detail">
    <i style={{color: '#F59E0B',marginLeft:'75px'
}} class="ri-megaphone-fill"></i>{" "}
    {data.release_date||"no information"}
    <i style={{color: '#F59E0B',marginLeft:'10px'
}} class="ri-video-on-fill"></i>{" "}
    {data.media_type.toUpperCase()}
    </p>
    <br></br>
    <br></br>
    <Link  to={`${data.media_type}/detail/${data.id}/trailer`} className="btn2"
>watch trailer</Link>
</div>
</>
}
export default Header;