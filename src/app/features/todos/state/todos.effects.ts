import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { TodosService } from '../services/todos.service';
import { TodosActions } from './todos.actions';
import { selectSelectedTodo, selectSelectedTodoId, selectTodoList } from './todos.selectors';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      mergeMap(() =>
        this.todosService.loadTodos().pipe(map((todos) => TodosActions.loadTodosSuccess({ todoList: todos })))
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.addTodo),
      mergeMap((data) => this.todosService.addTodo(data.todo).pipe(map(() => TodosActions.loadTodos())))
    )
  );

  editTodoName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.editTodoName),
      concatLatestFrom(() => [this.store.select(selectSelectedTodoId), this.store.select(selectTodoList)]),
      mergeMap(([data, selectedTodoId, todoList]) => {
        const payload = {...todoList.find((x) => x.id === selectedTodoId)} as Todo;
        payload.name = data.name;
        return this.todosService.editTodo(payload).pipe(map(() => TodosActions.loadTodos()));
      })
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService, private store: Store) {}
}
