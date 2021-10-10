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
        <h1 id="heading">INDIA COVID-19 DATA</h1>
        <table className="table" id="bg">
          <thead className="thead-dark">
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>LastUpdate</th>
            </tr>
          </thead>

            <tbody>
            {res.map((item,index) => {
                return (
                  <tr key={index}>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                  </tr>
                )
              })}
            </tbody>
        </table>
      </center>
    </div>
  )
}

export default App
