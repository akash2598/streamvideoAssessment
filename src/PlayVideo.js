import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PlayVideo(){
    let params =useParams()
  //  var [videodata,setvideodata] = useState({})
    var src="http://localhost:5000/api/playvideo?filename="+params.videoname
 
   /* useEffect(()=>{
      axios({
    method:"get",
    url:"http://localhost:5000/api/playvideo?filename="+params.videoname
    }).then((response)=>{
      setvideodata(response.data)
     console.log(videodata)
    
      },(error)=>{
    console.log("Error",error)
 })
 }) */
    return(
        <div class="embed-responsive embed-responsive-16by9">
              <video controls muted autoPlay>
                        <source src={src} type="video/mp4"></source>
              </video>  
             
         </div>
    )
}

export default PlayVideo