import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson } from "./store/actions/personAction";
import { removeperson } from "./store/reducers/personSlice";
import { Link } from "react-router-dom";
import Loading from "./Loading";

import Horizantal from "./Horizantal";
import Dropdown from "./Dropdown";
const Persondetail=()=>{
   const [category,setCategory]=useState("movie")
    const {pathname} = useLocation();
    const navigate=useNavigate();
    const {id}=useParams();
    const dispatch=useDispatch();
    const {info}=useSelector((state)=>state.person)
    console.log(info);
    useEffect(()=>{
        dispatch(asyncloadperson(id));
        return()=>{
            dispatch(removeperson());
        }
    },[])
    return info? <>
    <div className="wwci">
    <div className="tci">
<Link style={{textDecoration:'none',marginTop:'10px',color:'white'}} onClick={()=>navigate(-1)}
       class="ri-arrow-left-line">
    </Link>
    </div>
    <div className="rcb">
     <div className="lsg">
     <img className="iiops" src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}></img>
     <hr className="dzuis"></hr>
    <a  target="_blank" style={{textDecoration:'none',color:'white',marginLeft:'5px'}} href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-external-link-line"></i></a>
    <a  target="_blank" style={{textDecoration:'none',color:'white',marginLeft:'15px'}} href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i class="ri-facebook-fill"></i></a>
    <a target="_blank" style={{textDecoration:'none',color:'white', marginLeft:'20px'}} href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i class="ri-instagram-line"></i></a>
    <a  target="_blank" style={{textDecoration:'none',color:'white',marginLeft:'25px' }} href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i class="ri-twitter-x-fill"></i></a>
    
     <h1 className="pinfos">Personal Info </h1>
     <h1 className="pinfost">Known For</h1>
     <h1 className="dqbcu">{info.detail.known_for_department}</h1>
     <h1 className="pinfosting">Gender</h1>
     <h1 className="dqbcuo">{info.detail.gender===2?"Male":"Female"}</h1>
     <h1 className="pinfostingo">Birthday</h1>
     <h1 className="dqbcuoo">{info.detail.birthday}</h1>
     <h1 className="pinfostingo">Deathday</h1>
     <h1 className="dqbcuoo">{info.detail.deathday?info.detail.deathday:"Still Alive"}</h1>
     <h1 className="pinfostingo">Place Of Birth</h1>
     <h1 className="dqbcuoo">{info.detail.place_of_birth}</h1>
     </div>
    <div className="after">
    <h1 className="pinfosyy">{info.detail.name} </h1>
     <h1 className="pinfostvvv">Biography</h1>
     <h1 className="dqbcuko">{info.detail.biography}</h1>
     <h1 className="summary">Known For</h1>
     <div className="horizzzz">
    <Horizantal data={info.combinedCredits.cast}/></div>
    <div className="dzallr">
    <h1  className="zxbnm"> Acting</h1>
    <Dropdown title="category" options={['tv','movie']} func={(e)=>setCategory(e.target.value)} />
    </div>
    <div className="vvvvv"> 
    {info[category+"Credits"].cast.map((c,i)=>(
        <li className="listing">
            <Link to={`/${category}/detail/${c.id}`} className="bb">
            <span>{" "}{c.name||
        c.title||
        c.original_name||
        c.original_title}</span>
            <span className="block">{c.character && `character name:${c.character}`}</span>
            </Link>
        </li>
    ))}
    </div>
    </div>
    </div >
   
            
   </div>
   

    </>:<Loading></Loading>
}
export default Persondetail;