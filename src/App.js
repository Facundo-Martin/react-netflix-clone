import React from "react";
import HomeScreen from "./containers/HomeScreen";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="" element={<HomeScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
