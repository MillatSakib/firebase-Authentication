import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";

const LoginWithTrirdParty = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
        // console.log(loginUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleGoogleSignIn}>
        Login
      </button>
      <h3>User: {user.displayName}</h3>
      <p>Email: {user.email}</p>
      <img src={user.photoURL}></img>
    </div>
  );
};

export default LoginWithTrirdParty;
