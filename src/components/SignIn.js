import React, { Component } from "react";
import { signInWithGoogle, signOut } from "../firebase";

export default class SignIn extends Component {
  render() {
    return (
      <div className="signin-form">
        <h1>Sign In</h1>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
          Sign in with Google
        </button>
        <div style={{ textAlign: "center", fontSize: 13 }}>OR</div>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
          Sign up with Google
        </button>
        <br></br>
        <button onClick={signOut}>Logout</button>
      </div>
    );
  }
}
