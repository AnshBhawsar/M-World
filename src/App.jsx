
 import "./App.css"
import "./index.css"
import Loading from "./Loading.jsx"
import Home from "./Home"
import Trending from "./Trending.jsx"
import { Route, Routes } from "react-router-dom"
import Popular from "./popular.jsx"
import Movie from "./Movie.jsx"
import Tvshow from "./Tvshow.jsx"
import People from "./People.jsx"
import Moviedetail from "./Moviedetail.jsx"
import Tvdetail from "./Tvdetail.jsx"
import Persondetail from "./Persondetail.jsx"
import Trailer from "./Trailer.jsx"
import Notfount from "./Notfound.jsx"


function App() {
 
  return (
    <>
    <div className="main">
      <Routes>
       <Route  path="/"element={<Home/>}/>
       <Route  path="/trending"element={<Trending/>}/>
       <Route  path="/popular"element={<Popular/>}/>
       <Route  path="/movie"element={<Movie/>}/>
       <Route path="/movie/detail/:id" element={<Moviedetail/>}>
       <Route path="/movie/detail/:id/trailer" element={<Trailer/>}/>
       </Route>
       <Route  path="/tvshow"element={<Tvshow/>}/>
       <Route path="/tv/detail/:id" element={<Tvdetail/>}>
       <Route path="/tv/detail/:id/trailer"element={<Trailer/>}/>
       </Route>
       <Route  path="/people"element={<People/>}/>
       <Route path="/person/detail/:id" element={<Persondetail/>}/>
       <Route path="*"element={<Notfount/>}/>
      
      
      

       
   </Routes>
   
    </div>
    
    </>
  )
}

export default App
