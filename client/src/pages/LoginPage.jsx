import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";
import FormInput from "../components/atoms/FormInput";
import { LoginContainer } from "../components/atoms/Containers";

export default function LoginPage() {
  const { setUserContext, userContext } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();

    const url = "http://localhost:5000/tokens";

    const payload = { username, password };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        console.log("data", data.token);
        if (token !== undefined) {
          localStorage.setItem("token", token);
          setUserContext(data);
          console.log(data.user);
          console.log("user context", userContext);
          navigate("/todo");
        }
      });
  }
  console.log("user2", userContext);
  return (
    <div>
      <LoginContainer>
        LOGIN
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="password">username:</label>
          <FormInput
            type={"text"}
            id={"username"}
            name={"username"}
            value={username}
            setValue={setUsername}
          />

          <label htmlFor="password">password:</label>
          <FormInput
            id={"password"}
            name={"password"}
            type={"password"}
            value={password}
            setValue={setPassword}
          />

          <button type="submit">Submit</button>
        </form>
        <Link to="/register">Register</Link>
      </LoginContainer>
    </div>
  );
}
