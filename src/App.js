 HEAD
import React from "react";
import Cast from "./Podcast";
import Navbar from './Navbar/index.js';
import LandingPage from './Landinpage/index.js';
import Resumes from './Resumes';



const App = () => {
  return (
  
     
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Resumes/>
      <Cast />
      
     
  
    </div>
  )
  };


export default App;
