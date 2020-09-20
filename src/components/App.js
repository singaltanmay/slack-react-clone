import React from "react";
import { SignIn } from ".";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
