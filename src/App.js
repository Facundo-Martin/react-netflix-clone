import React, { useEffect, useState } from "react";
import HomeScreen from "./containers/Home";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./containers/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "./features/userSlice";
import ProfileScreen from "./containers/Profile";
import useUser from "./hooks/useUser";

function App() {
  const user = useUser();
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

  return (
    <Routes>
      {!user ? (
        <Route path="/signin" element={<LoginScreen />} />
      ) : (
        <>
          <Route path="" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </>
      )}
    </Routes>
  );
}

export default App;
