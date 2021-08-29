import "../css/SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
  state = { videos: "" };

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.videos);
  };

  render() {
    return (
      <div className="ui segment container">
        <div className="ui category search">
          <form className="ui form" onSubmit={this.onSearchSubmit}>
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search Videos"
                value={this.state.videos}
                onChange={(e) => {
                  this.setState({ videos: e.target.value });
                }}
              />
              <i className="search icon"></i>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
