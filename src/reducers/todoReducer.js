import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', JSON.stringify([]));
};
const initialValue = { todoList: getInitialTodo() };

export const todoReducer = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      console.log('adding this');
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({ ...action.payload });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    deleteTodo: (state, action) => {
      // rename action.payload to removingItemId because the id of the item we're removing is being passed to this reducer
      const removingItemId = action.payload;

      // fetch the todoList from localStorage
      const todoList = window.localStorage.getItem('todoList');

      // if there is any data in the todo list, remove the item from the list with the provided ID
      if (todoList) {
        // covert to list of JSON objects
        let todoListArr = JSON.parse(todoList);
        todoListArr = todoListArr.filter(
          (todoItem) => todoItem.id !== removingItemId
        );
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');

      // if there is any data in the todo list, remove the item from the list with the provided ID
      if (todoList) {
        // covert to list of JSON objects
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } =
  todoReducer.actions;
export default todoReducer.reducer;
