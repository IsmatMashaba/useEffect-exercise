import React from "react";

export default function Country({prop}) {

  return (

      <div className='country'>
          {/*<div className='country'>*/}
          <div> Name: {prop.name.common} </div>
          <div> Region: {prop.region} </div>
          <div>
              <a href={prop.maps.googleMaps} target='_blank'>Visit map here</a>
          </div>
          <img src={prop.flags.png} alt={prop.name.common}/>
          <div> Border:
              {
                  prop.borders ? (prop.borders.map((prop)=>{
                   return <ul>
                       <li>{prop}</li>
                   </ul>
                  })) : 'no borders'
              }
          </div>
          {/*</div>*/}
      </div>);
}

/*
* here the ternary operator means-
* if (prop.borders) {
*prop.borders.map((prop)=>{
                   return <ul>
                       <li>{prop}</li>
                   </ul>
* })} else {
*     'no border'
* }
*/
