import React from "react";
import HomeScreen from "./containers/HomeScreen";
import { Route, Link, Routes } from "react-router-dom";
import Login from "./containers/Login";

function App() {
  const user = null;
  return (
    <>
      {!user ? (
        <Login />
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
