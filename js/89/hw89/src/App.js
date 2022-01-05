import './App.css';
import React, { Component } from 'react';
import ListItem from './ListItem';
import WeatherDetails from './WeatherDetails';

class App extends Component {

  state = {
    zipcodes: [11598, 11516]
  }


  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcodes[0]}&appid=cb7c71219cf09eb0bb414b932669be97&units=imperial&lang=`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(weatherData => {
        console.log(weatherData);

        this.setState({
          name: weatherData.name,
          temperature: weatherData.main.temp
        });

      })
      .catch(e => {
        console.error(e);
      });
  }
  render() {
    return (
      <div >

        <h1>Weather Details</h1>
        <hr />
        <ListItem items={this.state.zipcodes} />
        <hr />
        <WeatherDetails name={this.state.name} temperature={this.state.temperature} />

      </div>
    );
  }
}


export default App;

