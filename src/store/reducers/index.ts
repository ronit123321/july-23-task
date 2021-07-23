import { ADD_TODO, RENDER_TODO_LIST } from '../constants';

const initialState = {
  toDoList: [],
};

export default function toDoApp(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem,
        },
      ];
      return {
        ...state,
        toDoList: newToDoList,
      };

    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList,
      };

    default:
      return state;
  }
}
