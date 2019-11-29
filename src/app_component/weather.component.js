import React from 'react';


const Weather = (props) =>{
    return(
        <div className="container">
            
           <div className="cards">
             <h1>{props.city}</h1>
               <h5 className="py-4">
        <i className={`wi ${props.weatherIcon}  display-1`}></i>

      </h5>
      {props.temp_celsius?(<h5 className="py-2">{props.temp_celsius}&deg; celsius</h5>):null}
      {/* Showing maximum and minimun temperature */}
    <div>{minmaxTemp(props.temperature_min,props.temperature_max)}</div>
    <h4 className="py-3">{props.description}</h4>
           </div>
        </div>
    );
}

function minmaxTemp(min,max){
      if(min && max){
          return(
            <h3>
            <span className="px-4">Minimum: {min}&deg;</span>
            <span className="px-4">Maximum: {max}&deg;</span>
            </h3>
          );
      }
    

}

export default Weather;