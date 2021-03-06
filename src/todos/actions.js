import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './ActionTypes';
let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
  completed: false,
  id: nextTodoId++,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});
