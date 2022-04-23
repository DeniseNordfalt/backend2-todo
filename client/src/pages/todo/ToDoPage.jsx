import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { MdClose, MdOutlineRadioButtonUnchecked } from "react-icons/md";

import Card from "../../components/molecules/Card";
import Header from "../../components/Header";
import TabList from "../../components/molecules/TabList";

const StyledDiv = styled.div`
  background-color: floralwhite;
  width: auto;
  height: auto;
  margin: 10px;
  border-radius: 10px;
  padding: 0px 10px;
`;

const ListContainer = styled.div`
  background-color: paleturquoise;
  width: 400px;
  margin: auto;
  border-width: 1px;
  border-color: grey;
  border-style: solid solid solid solid;
`;

const Container = styled.div`
  width: 400px;
  margin: auto;
  padding-top: 150px; ;
`;

export default function ToDoPage() {
  const [todos, setTodos] = useState([]);
  const url = "http://localhost:5000/todos";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <TabList />
        <ListContainer>
          {console.log(todos)}
          {/* <Card />
          <Card /> */}
          {/* checking connection */}
          {todos &&
            todos?.todos?.map((todo, index) => {
              return (
                <StyledDiv key={index}>
                  {/* {console.log("inner todo", todo)} */}
                  <Card
                    title={todo?.title}
                    content={todo?.content}
                    id={todo._id}
                    date={todo.date}
                    files={todo.files}
                    //TODO: byt ut till bara props och sköt resten från inne i card
                  />
                </StyledDiv>
              );
            })}
        </ListContainer>
      </Container>
    </div>
  );
}
