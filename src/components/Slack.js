import React, { Component } from "react";
import { Sidebar, MainContainer } from ".";

export default class Slack extends Component {
  render() {
    return (
      <div>
        Slack
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}
