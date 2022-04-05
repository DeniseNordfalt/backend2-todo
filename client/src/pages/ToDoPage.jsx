import React, { useEffect, useState } from "react";

export default function ToDoPage() {
  const [todos, setTodos] = useState([]);
  const url = "http://localhost:5000/todos";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      {console.log(todos)}
      ToDoPage
      {/* checking connection */}
      {todos &&
        todos?.todos?.map((todo, index) => {
          return (
            <div key={index}>
              <p>content: {todo?.content}</p>
              <p>date: {todo?.date}</p>
              <p>done: {todo?.done ? "true" : "false"}</p>
            </div>
          );
        })}
    </div>
  );
}
