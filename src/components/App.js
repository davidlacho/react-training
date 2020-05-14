import React from "react";
import axios from "axios";
import WeatherCard from "./weathercard";
import Search from "./search";
import Color from "./color";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.getWeather = this.getWeather.bind(this);
  //   this.state = {
  //     data: "",
  //   };
  // }

  state = {
    // data: "",
    error: "",
    weatherCards: [],
    color: "white",
  };

  changeColor = (color) => {
    this.setState({ color });
  };

  getWeather = (city) => {
    //   getWeather = function (city) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHERKEY}&units=metric`
      )
      .then(({ data }) => {
        // this.setState({ data });
        const weatherCards = this.state.weatherCards;
        weatherCards.push(
          <WeatherCard data={data} key={weatherCards.length - 1} />
        );

        this.setState({
          weatherCards,
        });
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };

  componentDidMount() {
    this.getWeather("vancouver");
  }

  weatherCards = [];

  render() {
    return this.state.error ? (
      <div>{this.state.error}</div>
    ) : this.state.weatherCards.length > 0 ? (
      <div style={{ backgroundColor: this.state.color }}>
        <Search getWeather={this.getWeather} />
        <div className="card-area-override ui four column doubling stackable grid container">
          <div className="ui cards">{this.state.weatherCards}</div>
        </div>
        <Color changeColor={this.changeColor} />
      </div>
    ) : (
      "Loading..."
    );
  }
}

export default App;
