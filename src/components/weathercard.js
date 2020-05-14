import React from "react";

function WeatherCard(props) {
  const { main, weather, name } = props.data;
  const { isSelected } = props; //props.isSelected
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{name}</div>
        <div className="meta">
          <span className="category">
            {weather[0].description} {isSelected ? "I'm Selected" : ""}
          </span>
        </div>
        <div className="description">
          <p></p>
        </div>
      </div>
      <div className="extra content">
        <div className="right floated author">
          <img
            className="ui avatar image"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt=""
          />{" "}
          {Math.round(main.temp)}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
