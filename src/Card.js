
import { Link } from 'react-router-dom';

function Card(props) {
  var src=""
  console.log("props received",props)
    return (
      
      <div class="row " style={{margin:"100px"}}>
       
      {props.videodata?.length>0 && props.videodata.map((each,index)=>{
        src="http://localhost:5000/"+each
      return(
     <div  class="grid">
        <div className="Card " style={{width:"100%" ,margin:"15px",padding:"10px"}}>
          <div class="card-deck" >
       <div class="card" style={{width: 180}}>
      
       <video src={src}></video>
    <div class="card-body">
    <h5 class="card-title">{each}</h5>
   <Link to={'/playVideo/'+each}> <button class="btn btn-primary">Play</button></Link>
  </div>
          </div>

        

          </div>
      </div>

    </div>
      )
    })}
 
      </div>
    
     
    );
  }
  
  export default Card