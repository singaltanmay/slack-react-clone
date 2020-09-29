import React, { Component } from "react";
import { signOut } from "../firebase";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div className="avatar">
            <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg" />
          </div>
          <div>Tanmay Singal</div>
          <div
            style={{ marginLeft: 10, marginTop: 2, cursor: "pointer" }}
            onClick={signOut}
          >
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2150/2150480.svg"
              height="25"
            />
          </div>
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
