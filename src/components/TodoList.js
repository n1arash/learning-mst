import React from "react";
import { observer } from "mobx-react";

const TodoList = ({ todos }) => (
  <ul>
    {todos.items.map(item => (
      <li key={item.id} onClick={() => item.toggleTodo()}>
        {item.title} <span>{item.completed ? "✅" : "❌"}</span>{" "}
      </li>
    ))}
  </ul>
);

export default observer(TodoList);
