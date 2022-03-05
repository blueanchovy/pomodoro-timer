import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="logincontainer">
      <div className="logininnercontainer">
        <img
          src="https://cdn.shopify.com/s/files/1/0257/1675/t/154/assets/pomodoro-alone.png?v=13453015481945115125"
          alt=""
        />
        <h1>Sign in to Pomodoro Timer</h1>
        <p>manish-pomodoro.web.app</p>
        <button onClick={signIn}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
