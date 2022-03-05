import { signOut } from "firebase/auth";
import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = auth.currentUser;
  const dispatch = useDispatch();

  const signout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="header">
      <div className="title">Pomodoro Timer</div>
      <div className="user">
        <div className="logout" onClick={signout}>
          {" "}
          Log Out
        </div>
        <div className="avatar">
          <img src={user?.photoURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
