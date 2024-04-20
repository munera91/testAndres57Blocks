import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { isValidEmail } from "../utils/utils";
import { DangerAlert } from "../components/dangerAlert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../store/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { onInputChange, email, password } = useForm({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  /*Fake User & Pass
  No se realiza ningun tipo de consumo de servicios ni logica
  para el login de acuerdo a instrucciones de la prueba.
  */
  const regEmail = "camilo@hotmail.com";
  const regPassword = "C@milo4321";

  useEffect(() => {
    const stgUser = localStorage.getItem("authUser");
    console.log("stgUser", stgUser);
    if (stgUser !== null) {
      dispatch(setUserAuth({user:stgUser}));
      navigate("/home");
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Introduzca un email válido.");
      return;
    }

    if (email === regEmail && password === regPassword) {
      setErrorMessage("");
      console.log("Success!");
      localStorage.setItem("authUser", email);
      dispatch(setUserAuth({user:email}));
      navigate("/home");
    } else {
      setErrorMessage(
        "Credenciales inválidas. Verifica tu email y contraseña."
      );
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw]">
      <form onSubmit={handleLogin}>
        <div className="p-16 border border-1 flex flex-col gap-8 text-center">
          <h1>Bienvenido</h1>
          <h2>Iniciar Sesión</h2>
          <input
            name="email"
            placeholder="Email"
            id="emailField"
            value={email}
            onChange={onInputChange}
            className="p-2 form-control"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onInputChange}
            autoComplete="off"
            id="passField"
            className="p-2 form-control"
          />
          {errorMessage.length > 0 && (
            <DangerAlert
              dangerTitle={"Datos incorrectos"}
              dangerDescription={errorMessage}
            />
          )}
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
