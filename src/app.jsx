import React from "react";
import { AppRouter } from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogoutAuth } from "./store/authSlice";

export const App = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isLoginPage = location.pathname === "/";

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("favPoks");
    dispatch(setLogoutAuth());
    navigate("/");
  };

  return (
    <>
      {!isLoginPage && <Navbar onLogout={handleLogout} />}
      <AppRouter />
    </>
  );
};
