import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea``;

export default function FormTeaxtarea({
  id,
  type,
  value,
  setValue,
  placeholder,
  ...props
}) {
  return (
    <Textarea
      id={id}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      {...props}
    />
  );
}
