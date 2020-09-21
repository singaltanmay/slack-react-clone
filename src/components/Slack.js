import React, { Component } from "react";
import { Sidebar, MainContainer } from ".";

export default class Slack extends Component {
  render() {
    return (
      <div id="slack">
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}
