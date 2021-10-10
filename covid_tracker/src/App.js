//jshint esversion:6
import React,{useEffect,useState} from 'react'

const App = () => {
  const [res,setres]=useState([]);
  useEffect(()=>{
     fetch("https://data.covid19india.org/data.json").then(
       response => response.json()).then(
       data => setres(data.statewise)
     );
  },[]);
  return (
    <div>
      <center>
        <h1>INDIA COVID-19 DATA</h1>
        
      </center>
    </div>
  )
}

export default App
