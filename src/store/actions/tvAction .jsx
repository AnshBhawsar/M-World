import { removetv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { loadtv } from '../reducers/tvSlice';

export const asyncloadtv=(id)=>async(dispatch,getState)=>{
  try {
  const detail=await axios.get(`/tv/${id}`)
  const externalid=await axios.get(`/tv/${id}/external_ids`)
  const recommendations=await axios.get(`/tv/${id}/recommendations`) 
  const similar=await axios.get(`/tv/${id}/similar`) 
  const translations=await axios.get(`/tv/${id}/translations`) 
  const videos=await axios.get(`/tv/${id}/videos`)
  const watchproviders=await axios.get(`/tv/${id}/watch/providers`)
  let theultimateddetails={
      detail:detail.data,
      externalid:externalid.data,
      recommendations:recommendations.data.results,
      similar:similar.results,
      translations:translations.data.translations.map((q)=>q.english_name),
      videos:videos.data.results.find(m=>m.type==="Trailer"),
    watchproviders:watchproviders.data.results.US,
  
  }
  dispatch(loadtv(theultimateddetails));
  console.log(theultimateddetails);
  } catch (error) {
      console.log("error:",error);
  }
  }