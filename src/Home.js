

import Card from './Card'

import axios from 'axios';

import React, { useEffect, useState } from 'react';


function Home (){
  
  
    var [video,setVideo] = useState({})
   
    useEffect(()=>{
      axios({
    method:"get",
    url:"http://localhost:5000/api/allassets"
    }).then((response)=>{
    console.log("response from all cake api",response.data)
    setVideo(response.data.videos)
    console.log("video",video?.length)
      },(error)=>{
    console.log("Error from all cake api",error)
 })
 },[])


 

    return(
      
        <div className="Home">
        
     

        <Card videodata={video}></Card>

      
      
      
      
      
     
        </div>

    )
} 


export default Home