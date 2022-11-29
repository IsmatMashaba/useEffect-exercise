import logo from "./logo.svg";
import "./App.css";

import {useState, useEffect} from "react";
/*import axios from "axios";*/
import './components/Country/Country.css';
import Country from "./components/Country/Country";




const url="https://restcountries.com/v3.1/all";

function App() {
  const [data,setData] = useState([]);

  /* for practice-
fetch(url)
      .then((res)=>(res.json()))
      .then((data)=>setData(data))
      .catch((error)=>console.log(error));
*/
  /*for axios*/
/*axios
    .get(url)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))*/
  async function fetchData (){
    fetch(url)
        .then((res)=>(res.json()))
        .then((data)=>setData(data))
        .catch((error)=>console.log(error))
  }
useEffect(()=>{
  fetchData()

},[])

/*console.log(data);*/
  return (
      <div className="App">
<h3>Country List</h3>
    {data.map((item)=>{
      console.log(item);
     return (
         <Country
             name={item.name.common}
             region={item.continents}
             /*map={maps.googleMaps}*/
             flags={item.flags.png}
             borders={item.borders}
         />
     )
    })}

  </div>)
}



export default App;
