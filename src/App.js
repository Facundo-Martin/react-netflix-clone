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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          signIn({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(signOut());
      }
    });
    return unsubscribe;
  }, []);

  if (!user) return <LoginScreen />;

  return (
    <Routes>
      <Route path="" element={<HomeScreen />} />
    </Routes>
  );
}

export default App;
