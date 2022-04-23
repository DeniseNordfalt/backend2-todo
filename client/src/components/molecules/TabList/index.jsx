import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styles";

export default function TabList() {
  return (
    <s.TabContainer>
      <s.Tab>
        <Link to="/todo">Active</Link>
      </s.Tab>
      <s.Tab>
        <Link to="/todo/completed">Completed</Link>
      </s.Tab>
      {/* <Tab>
          <Link to="/todo/uncompleted">Uncompleted</Link>
        </Tab> */}
      <s.Tab>
        <Link to="/todo/create-todo">New todo</Link>
      </s.Tab>
    </s.TabContainer>
  );
}
