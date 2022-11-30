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
  function fetchData (){
    fetch(url)
        .then((res)=>(res.json()))
        .then((data)=>setData(data))
        .catch((error)=>console.log(error))
  }
useEffect(()=>{
  fetchData()

},[])

console.log(data);
  return (
      <div className="App">
      <h3>Country List</h3>
        <div className='country-list'>
        {/*using slice method to get only 6 items from data array*/}
        {data.slice(0,6).map((item)=>{
          return <Country prop={item} />
        })}
        </div>

  </div>)
}



export default App;
