import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as s from "./styles";

export default function Modal({ onClose, show, title, content, id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  useEffect(() => {
    setNewTitle(title);
    setNewContent(content);
  }, [title, content]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("id", id);

    const url = `http://localhost:5000/todos/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: newTitle,
        content: newContent,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.reload(false);
  };

  if (!show) {
    return null;
  }

  return (
    <s.ModalContainer onClick={onClose}>
      <s.ModalContent onClick={(e) => e.stopPropagation()}>
        <s.ListContainer>
          <s.StyledDiv>
            <s.ModalHeader>
              <s.ModalTitle>Edit ToDo - {title}</s.ModalTitle>
            </s.ModalHeader>
            <s.ModalBody>
              <form onSubmit={handleOnSubmit} id="form">
                {/* <label htmlFor="title">title</label> */}
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                {/* <label htmlFor="content">content</label> */}
                <textarea
                  id="content"
                  name="content"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  rows="10"
                  columns="auto"
                />
              </form>
            </s.ModalBody>

            <s.ModalFooter>
              <button type="submit" form="form">
                Save
              </button>
              <button onClick={onClose}>Cancel</button>
            </s.ModalFooter>
          </s.StyledDiv>
        </s.ListContainer>
      </s.ModalContent>
    </s.ModalContainer>
  );
}
