import React from "react";
import styled from "styled-components";

const Input = styled.input``;

export default function FormInput({ id, type, value, setValue, placeholder }) {
  return (
    <Input
      id={id}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    ></Input>
  );
}
