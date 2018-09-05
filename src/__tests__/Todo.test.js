import { TodoListItem, TodoList } from "../models/Todo";
import { getSnapshot } from "mobx-state-tree";

it("it should create instance of Todo", () => {
  const item = TodoListItem.create({
    title: "MST Todo MVC",
    completed: true
  });
  expect(item.title).toBe("MST Todo MVC");
  item.changeTitle("Redux");
  expect(item.title).toBe("Redux");
  item.toggleTodo();
  expect(item.completed).toBeFalsy();
});

it("Should create List of TodoListItem", () => {
  const list = TodoList.create({
    items: [
      {
        title: "Learn Django"
      }
    ]
  });

  expect(list.items.length).toBe(1);
  expect(list.items[0].completed).toBeFalsy();
});

it("Can Add TodoListItem to TodoList", () => {
  const list = TodoList.create();
  list.add({
    id: "1",
    title: "Start Learning MST",
    completed: true
  });
  expect(getSnapshot(list)).toMatchSnapshot();
});

it("can return count of all TodoListItem in TodoList", () => {
  const list = TodoList.create();
  list.add({
    title: "Hello MST"
  });

  expect(list.countAllTodos).toBe(1);
});
