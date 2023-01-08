import React, { useEffect, useState } from "react";
import HomeScreen from "./containers/Home";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./containers/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signIn, signOut } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log("app", user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          signIn({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log("signIn");
      } else {
        dispatch(signOut());
      }
    });
    return unsubscribe;
  }, []);
  console.log("user", user);

  if (!user) return <LoginScreen />;

  return (
    <Routes>
      <Route path="" element={<HomeScreen />} />
    </Routes>
  );
}

export default App;
