import React from 'react';
import {useState} from 'react';
import Inputer from './Input';
import axios from 'axios';
import Result from './Result';

 const App = () => {
  const[Inputs,SetInput] = useState("");
  const[temp,setTemp] = useState("");
  const[desc,setDesc] = useState("");
  const[icon,setIcon] = useState("");
  const findWeather = async() => {
    const apikey = "04f346f30fb57ad9241f6a6334f7c7b4";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + Inputs + "&appid=" + apikey + "&units=" + unit;
    const response = await axios.get(url);
    console.log(response);
    const temp = await response.data.main.temp;
    const  weatherDescription = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    console.log(temp,weatherDescription,imageURL);
    setTemp(temp);
    setDesc(weatherDescription);
    setIcon(imageURL);
    SetInput("");
  }
  return (
    <div className = "app">
    { temp === "" ? (
      <Inputer Inputs = {Inputs} SetInput = {SetInput} findWeather = {findWeather}/>
    ) : (
      <Result temp = {temp} desc = {desc} icon = {icon} setTemp = {setTemp}/>
    )}
    </div>
  );
 };
 export default App;