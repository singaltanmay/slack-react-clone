import React, { useContext } from "react";
import { SignIn, Slack } from ".";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const PrivateRoute = ({ component: Component, isLoggedIn, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          // we will pass the path the user is trying to access to our login component
          // instead of passing string we pass object
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

function App() {
  const auth = useContext(UserContext);

  if (auth.loading) {
    return <h1>Loading!</h1>;
  }

  return (
    <div className="App">
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={Slack}
          isLoggedIn={auth.user ? true : false}
        />
        <Route exact path="/auth" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
