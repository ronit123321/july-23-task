import { ADD_TODO, LOAD_TODO_LIST } from "../constants";

export function addToDo(title: string) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: (new Date().getTime()),
      title
    }
  };
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}