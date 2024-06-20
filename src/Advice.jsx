import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

const Advice = () => {

  const [advice,setAdvice]=useState("Believes in Faith");

  const fetchAdvice=()=>{
    axios.get("https://api.adviceslip.com/advice")
    .then((response)=>{
        console.log(response.data);
        const {advice} =response.data.slip;
        setAdvice(advice);
    })
    .catch((error)=>{
        console.log("Error : ",error);
    })
  }


  return (
    
        <div className="app">
            <div className="card">
                <h3 className='heading'>{advice}</h3>
                <button className="button" onClick={fetchAdvice}>
                    <span>Give me advice !</span>
                </button>
            </div>
        </div>
    
  )
}

export default Advice