import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';
import 'weather-icons/css/weather-icons.css'; 
import Form from './app_component/form.component';
//api.openweathermap.org/data/2.5/weather?q=Vadodara,India
const API_key="95da0ebbe1613f151a225e87c32b34f8";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city:undefined,
      country:undefined,
      icon: undefined,
      main: undefined,
      celsius:undefined,
      temperature_max:undefined,
      temperature_min:undefined,
      description:"",
      
    }; 
    
    this.weatherIcon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere: "wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog",
    }
  }
  calCelsius(temp){
    let celsi=Math.floor(temp-273.15);
    return celsi;
  }
  maxcalCelsius(temp_max){
    let celsi=Math.floor(temp_max-273.15)
    return celsi;
}
  mincalCelsius(temp_min){
      let celsi=Math.floor(temp_min-273.15)
      return celsi;
  }

  get_WeatherIcon(icons,rangeId){
    switch(true){
      case rangeId>=200 && rangeId<=232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
      
      case rangeId>=300 && rangeId<=321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
      
      case rangeId>=500 && rangeId<=531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
          
      case rangeId>=600 && rangeId<=622:
        this.setState({icon:this.weatherIcon.Snow});
        break;

      case rangeId>=701 && rangeId<=781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
        
      case rangeId>=800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
      
      case rangeId>=801 && rangeId<=804	:
          this.setState({icon:this.weatherIcon.Clouds});
          break;
      default:
          this.setState({icon:this.weatherIcon.Clouds});
      
    }

  }
  
 
  getWeather = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;



    if(city && country){
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
        const response = await api_call.json();
        console.log(response);
        
        if(response.sys){
        this.setState({
          city:`${response.name},${response.sys.country}`,
          celsius:this.calCelsius(response.main.temp), 
          temperature_max:this.maxcalCelsius(response.main.temp_max),
          temperature_min:this.mincalCelsius(response.main.temp_min),
          description:response.weather[0].description
    
    
        });
      
    
        this.get_WeatherIcon(this.weatherIcon,response.weather[0].id)
      }
      else{
      
        this.setState({error:true});
      }
    }
    else{
      this.setState({error:true});
     
    }
  };

  
  render(){
    return(
      <div className="App">
        <div><Form loadweather={this.getWeather}/></div>
      <h1><Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temperature_max={this.state.temperature_max}
      temperature_min={this.state.temperature_min}
      description={this.state.description}
      weatherIcon={this.state.icon}
     
      /></h1>
     
    </div>

    );
  }

}








export default App;
