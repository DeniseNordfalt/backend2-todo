import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: lightyellow;
`;

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <HeaderContainer>
      <button onClick={handleLogout}>LOG OUT</button>
    </HeaderContainer>
  );
}
