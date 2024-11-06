import { Link } from "react-router-dom";
import noImage from "/download.png"
const Card=({data,title})=>{
   
    return<>
    <div className="ci">
        { data.map((c,i)=>(
          <Link to={`/${data.media_type||title}/detail/${c.id}`} key={i} className="nk" > 
          <img className="ig" src= {c.backdrop_path||c.poster_path||c.profile_path?`https://image.tmdb.org/t/p/original/${c.backdrop_path||c.poster_path||c.profile_path}`:noImage}></img>
         <h1 className="dc">
            {c.name||c.title||c.original_name||c.original_title}
            </h1>
            {c.vote_average&&(<div className="rq">{(c.vote_average*10).toFixed()}<sup>%</sup></div>)}
            
          </Link>
          
        ))}
       
    </div>
    </>
}
export default Card;