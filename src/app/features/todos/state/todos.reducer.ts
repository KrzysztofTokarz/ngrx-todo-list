import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';

import { TodosActions } from './todos.actions';

export interface TodosState {
  todoList: ReadonlyArray<Todo>;
  selectedTodoId: string | null;
}

export const initialState: TodosState = {
  todoList: [],
  selectedTodoId: null,
};

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodosSuccess, (state, payload) => ({ ...state, todoList: payload.todoList })),
  on(TodosActions.selectTodo, (state, payload) => ({ ...state, selectedTodoId: payload.id }))
);
