import "./index.css"
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Slidenav(){
   
    return<>
    <div className="snav">
  <h1 className="he">
    <span className="title"><i style={{color:'#6656CD'}} class="ri-tv-fill"></i> M World!</span></h1>
    <span className="ti">New Feeds</span>
    <nav className="nav">
    <Link to="/trending" className="li1"><i  class="fa-solid fa-fire"></i>Trending</Link>
    <Link to="/popular" className="li2"><i class="ri-bard-fill"></i> Popular</Link>
    <Link to="/movie" className="li3"><i class="ri-movie-2-fill"></i> Movies</Link>
    <Link  to="/tvshow"className="li4"><i class="ri-tv-2-fill"></i> Tv show</Link>
    <Link to="/people" className="li6"><i class="ri-group-fill"></i> People</Link>
    </nav>
    <hr className="hr"></hr>
    <nav className="nav">
      <h2>Website information</h2>
    <Link className="li7"><i class="ri-information-line"></i> About M world!</Link>
    <Link className="li8"><i class="ri-phone-fill"></i> contact us</Link>
    </nav>
    </div>
    
    </>
}
export default Slidenav;