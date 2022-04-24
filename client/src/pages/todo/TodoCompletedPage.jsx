import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Tab = styled.div`
  background-color: paleturquoise;
  position: relative;
  /* margin-bottom: -1px; */

  width: auto;
  min-width: 50px;
  height: 40px;
  padding: 0px 10px;

  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 400px;
  margin: auto;
  padding-top: 150px; ;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid grey;
`;

export default function TodoCompletedPage() {
  const [todos, setTodos] = useState([]);
  const url = "http://localhost:5000/todos/completed";
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
          {console.log("todos", todos)}
          {/* <Card />
          <Card /> */}
          {/* checking connection */}
          {todos &&
            todos?.todos?.map((todo, index) => {
              return (
                <StyledDiv key={index}>
                  <Card
                    title={todo?.title}
                    content={todo?.content}
                    id={todo._id}
                    date={todo.date}
                    {...todo}
                  />
                  {/* <CardHeader>
                <CircleIcon />
                <h2>{todo?.title}</h2>
                <CloseIcon />
              </CardHeader> */}
                  {/* <p>date: {todo?.date}</p>
              <p>done: {todo?.done ? "true" : "false"}</p> */}
                </StyledDiv>
              );
            })}
        </ListContainer>
      </Container>
    </div>
  );
}
