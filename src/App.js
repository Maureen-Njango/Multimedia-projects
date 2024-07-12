 
import React from "react";
import Cast from "./Podcast";
import Navbar from './Navbar/index.js';
import LandingPage from './Landinpage/index.js';
import Resumes from './Resumes';
import Blogs from './Blogs'



const App = () => {
  return (
  
     
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Blogs/>

      <Cast />
      <Resumes/>
    
      
     
  
    </div>
  )
  };


export default App;
