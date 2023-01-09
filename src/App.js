import { useEffect } from "react";
import HomeScreen from "./containers/Home";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import LoginScreen from "./containers/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "./features/userSlice";
import ProfileScreen from "./containers/Profile";
import useUser from "./hooks/useUser";

function App() {
  const user = useUser();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

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
  }, [dispatch]);

  if (user && pathname == "/signin") {
    return <Navigate to="/" />;
  }
  if (!user && pathname !== "/signin") {
    return <Navigate to="/signin" />;
  }

  return (
    <Routes>
      <Route path="/signin" element={<LoginScreen />} />
      <Route path="" element={<HomeScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Routes>
  );
}

export default App;
