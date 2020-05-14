import React from "react";

class Search extends React.Component {
  state = { value: "" };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const city = this.state.value;
          this.props.getWeather(city);
          this.setState({ value: "" });
        }}
        className="ui fluid icon input"
      >
        <input
          type="text"
          placeholder="Search a very wide input..."
          value={this.state.value}
          onChange={(e) => {
            this.setState({
              value: e.target.value,
            });
          }}
        />
        <i className="search icon"></i>
      </form>
    );
  }
}

export default Search;
