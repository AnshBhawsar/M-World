import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate ,Link} from "react-router-dom";
import Notfount from "./Notfound";



const Trailer=()=>{
    const navigate=useNavigate();
    const {pathname}=useLocation();
    const category=pathname.includes("movie")?"movie":"tv";
    const ytvideo=useSelector((state)=>state[category].info.videos)
    console.log(ytvideo);
    return<>
 

        
    <div className="mncx">
    <Link className="croam">
        <i  onClick={()=>navigate(-1)}
             class="ri-close-line"></i></Link> 
 {ytvideo?(<ReactPlayer controls className="aaaa" url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>):<Notfount></Notfount>}
             
        
       
       
    </div>
    </>
}
export default Trailer;