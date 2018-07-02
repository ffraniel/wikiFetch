import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  render() {
    return (
      <div className="List">
        {this.props.results.names.length === 0 && <p>Type something in to see some Wikipedia search results</p>}
        {this.props.results.names.length > 1 &&
          this.props.results.names.map((value, key) => {
            var link = this.props.results.links[key];
            var detail = this.props.results.details[key];

            return (
              <div className="search-result-item" key={key}>
                <a href={link}>
                  <h3>{value}</h3>
                </a>
                <p>{detail}</p>
              </div>
            );
          })}
          {/* <p></p>
          <button></button> */}
      </div>
    );
  }
}
