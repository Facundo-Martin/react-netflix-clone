import React, { useEffect, useState } from "react";
import HomeScreen from "./containers/Home";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./containers/Login";
import { auth } from "./firebase";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {!isSignedIn ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route>
            <Route path="" element={<HomeScreen />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
