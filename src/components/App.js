import React from "react";
import { SignIn, Slack } from ".";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Slack} />
        <Route exact path="/auth" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
