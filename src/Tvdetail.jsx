import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv } from "./store/actions/tvAction ";
import { removetv } from "./store/reducers/tvSlice";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Horizantalcard from "./Horizantal"
const Tvdetail=()=>{
    const {pathname} = useLocation();
    const navigate=useNavigate();
    const {id}=useParams();
    const dispatch=useDispatch();
    const {info}=useSelector((state)=>state.tv)
    console.log(info);
    useEffect(()=>{
        dispatch(asyncloadtv(id));
        return()=>{
            dispatch(removetv());
        }
    },[])
    
    return info?( <>
        <div style={{background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
   backgroundPosition:'center',
   backgroundSize:'cover',  
   height:'165vh',
   width:'100%',   
   backgroundRepeat:'no-repeat',
   overflowY:'auto',}} className="md" >
    <div className="tci">
       
    <Link style={{textDecoration:'none',marginLeft:'85px',marginTop:'15px',color:'white'}} onClick={()=>navigate(-1)}
           class="ri-arrow-left-line">
        </Link>
        <a style={{textDecoration:'none', marginLeft:'45px',marginTop:'15px',color:'white'}} target="_blank"  href={info.detail.homepage}><i class="ri-global-line"></i></a>
        <a style={{textDecoration:'none',marginLeft:'65px',marginTop:'15px',color:'white'}} target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-external-link-line"></i></a>
        <a style={{textDecoration:'none',marginLeft:'70px',marginTop:'15px',color:'white'}} target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
    </div>
    {/*part1*/}
    <div className="tlq">
       <h1 className="hqwr">
        {info.detail.name||
        info.detail.title||
        info.detail.original_name||
        info.detail.original_title}
       <small className="sol">({info.detail.first_air_date.split("-")[0]})</small>
       </h1>
       <div className="xzx">
        <span className="uiop">
        {(info.detail.vote_average*10).toFixed()}{""}<sup>%</sup>   </span>
            <h1 className="her">User Score</h1>
            <h1 className="rdate"> {info.detail.release_date}   </h1>
            <h1 className="asdf">  {info.detail.genres.map((g)=>g.name).join(",")}  </h1>
            <h1 className="asdf">{info.detail.runtime}min</h1>
            <h1 className="mmv">Overview</h1>
             <p className="ovew">{info.detail.overview}</p>
           <Link className="tril" to={`${pathname}/trailer`}><i style={{marginRight:'2px'}} class="ri-play-fill"></i>  Play Trailer</Link>
       </div>
        </div>
    <div className="dwe">
    <img className="iio" src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path||info.detail.backdrop_path}`}></img>
        </div>
    
        {/*part2*/}
    <div className="rip" >
       
        {info.watchproviders && info.watchproviders.buy &&(
            <div className="llpo">
                <h1>Available on Platform</h1>
                {info.watchproviders.buy.map((w)=>(
                <img title={w.provider_name}  className="uilo" src={`https://image.tmdb.org/t/p/original${w.logo_path}`}></img>
            ))}
            </div>
           )}

           {info.watchproviders && info.watchproviders.rent &&(
            <div className="llpo">
                <h1>Available on Rent</h1>
                {info.watchproviders.rent.map((w)=>(
                <img title={w.provider_name} className="uilo" src={`https://image.tmdb.org/t/p/original${w.logo_path}`}></img>
            ))}
            </div>
           )}
             {info.watchproviders && info.watchproviders.buy &&(
            <div className="llpo">
                <h1>Available on buy</h1>
                {info.watchproviders.buy.map((w)=>(
                <img title={w.provider_name}  className="uilo" src={`https://image.tmdb.org/t/p/original${w.logo_path}`}></img>
            ))}
            </div>
           )}
   </div >
   {/* part 3 seasons */}
   <hr className="dzui"></hr>
   <h1 className="zzmly">Recommendations and similar stuff</h1>
   <div className="joe">
   <div className="mala">
    {info.detail.seasons.map((w,i)=>(
        <>
        <img key={i} className="ig" src= {`https://image.tmdb.org/t/p/original/${w.poster_path}`}></img>
       <div className="gold">
        <h1 className="dci">
           {info.detail.name||w.title||w.original_name||w.original_title}</h1>
           </div>
           </>
    ))}
  
   </div>
   </div>
  
  
  
   <Outlet></Outlet>
   </div>
    </>):<Loading></Loading>

}
export default Tvdetail;