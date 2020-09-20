import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div>
            <img className="user-avatar" />
          </div>
          <div>Tanmay Singal</div>
        </div>
        <div className="channels"></div>
      </div>
    );
  }
}
