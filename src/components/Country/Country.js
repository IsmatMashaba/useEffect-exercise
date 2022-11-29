import React from "react";

export default function Country({name, region, /*map*/flags,borders}) {

  return (

      <div>
  <div> Name: {name} </div>
        <div>Region: {region}</div>
          {/*<a href={map}>View map</a>*/}
        <img src={flags} alt={name}/>
          <div> Borders: {borders}</div>

  </div>);
}
