import React from 'react';
import {Button} from "@material-ui/core";
import "./Result.css";
const Result = ({temp,desc,icon,setTemp}) => {
    return(
        <div className = "result">
            <div className = "result__box">
                <h1>Temp : { temp } °C</h1>
                <p>{ desc }</p>
                <img src = { icon } alt = "logo"/> <br/>
                <Button variant = "contained" color = "default" onClick = {() => {setTemp("")}}>BACK</Button>  
            </div>
        </div>
    );
};
export default Result;