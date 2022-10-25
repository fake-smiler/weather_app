import React from 'react';
import Input from '@material-ui/core/Input';
import {Button} from '@material-ui/core';
import './Input.css';
const Inputer = ({Inputs,SetInput,findWeather}) => {   //Javascript destructuring
    const handleChange = (e) => {
        SetInput(e.target.value);
        //console.log(Inputs);
    }
    const handleClick = (event) => {
        event.preventDefault();
        findWeather();
    }
    return (
        <div className="inputbox">
            <div className = "inputBox__field">
                <h1>Google Weather App</h1>
                <p>Powered by</p>
                <img src = "https://logowik.com/content/uploads/images/985_google_g_icon.jpg"
                alt=""/>
                <form>
                <Input placeholder = "Enter Your City Name"onChange = {handleChange} value = {Inputs}/>
                <br/>
                <Button variant = "contained" color = "primary" type = "submit" onClick = {handleClick}>SEARCH</Button>
                </form>
            </div>
        </div>
    );
};
export default Inputer;