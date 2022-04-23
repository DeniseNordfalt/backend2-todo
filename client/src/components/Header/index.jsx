import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: lightyellow;
`;

export default function Header() {
  const { setUserContext, userContext } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserContext(null);
    navigate("/login");
  };
  return (
    console.log("uc", userContext),
    (
      <HeaderContainer>
        <button onClick={handleLogout}>LOG OUT</button>
      </HeaderContainer>
    )
  );
}
