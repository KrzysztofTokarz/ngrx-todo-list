import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../models/todo';
import { TodosState } from './todos.reducer';

const selectTodos = createFeatureSelector<TodosState>('todos');

export const selectTodoList = createSelector(selectTodos, (state) => state.todoList);
export const selectSelectedTodoId = createSelector(selectTodos, (state) => state.selectedTodoId);
export const selectSelectedTodo = createSelector(
  selectTodoList,
  selectSelectedTodoId,
  (todos, selectedId) => todos.find((x) => x.id === selectedId) as Todo
);
