import { types } from "mobx-state-tree";
import { v4 } from "uuid";

export const TodoListItem = types
  .model({
    id: types.optional(types.string, v4()),
    title: types.string,
    completed: types.optional(types.boolean, false)
  })
  .actions(self => ({
    changeTitle(title) {
      self.title = title;
    },
    toggleTodo() {
      self.completed = !self.completed;
    }
  }));

export const TodoList = types
  .model({
    items: types.array(TodoListItem)
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    }
  }))
  .views(self => ({
    get countAllTodos() {
      return self.items.length;
    }
  }));
