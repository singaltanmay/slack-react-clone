import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div className="avatar">
            <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg" />
          </div>
          <div>Tanmay Singal</div>
        </div>

        <hr className="sidebar-space" />

        <div className="channels">
          <div className="header">Channels</div>

          <ul className="channels-list">
            <li># assignment</li>
            <li># test</li>
          </ul>
        </div>
      </div>
    );
  }
}
