import React, { Component } from "react";
import { TodoList as TodoListModel } from "./models/Todo";
import { observer } from "mobx-react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
const todos = TodoListModel.create({});
class App extends Component {
  render() {
    return (
      <div>
        <h1>MST Todo MVC</h1>
        <TodoForm todos={todos} />
        <TodoList todos={todos} />
        <i>count of all todos: {todos.countAllTodos}</i>
      </div>
    );
  }
}

export default observer(App);
