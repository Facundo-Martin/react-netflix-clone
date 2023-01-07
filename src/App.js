import React from "react";
import HomeScreen from "./containers/Home";
import { Route, Link, Routes } from "react-router-dom";
import LoginScreen from "./containers/Login";

function App() {
  const user = null;
  return (
    <>
      {!user ? (
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
