import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Redirect, Route,  Switch} from 'react-router-dom'

import NavBar from './NavBar'
import Card from './Card'
import Home from './Home'
import PlayVideo from './PlayVideo'


function App() {
  


  return (
   <div className="App">
     <Router>
      <NavBar  /> 
       <div>
       <Route path="/" exact component={Home}/>
       <Route path="/playVideo/:videoname" exact component={PlayVideo}/>
       </div>
       </Router>
   </div>
  )
}

export default App
