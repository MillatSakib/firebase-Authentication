import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.init";
import { Helmet, HelmetProvider } from "react-helmet-async";

const LoginWithTrirdParty = () => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Auth | Login</title>
        </Helmet>
        <button className="btn btn-primary mx-4" onClick={handleGoogleSignIn}>
          Login
        </button>

        <button className="btn btn-primary" onClick={handleGoogleSignOut}>
          Sign Out
        </button>
        <h3>User: {user.displayName}</h3>
        <p>Email: {user.email}</p>
        <img src={user.photoURL}></img>
      </div>
    </HelmetProvider>
  );
};

export default LoginWithTrirdParty;
