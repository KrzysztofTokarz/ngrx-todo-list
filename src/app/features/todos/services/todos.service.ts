import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  setTodos(todos: Todo[]): Observable<any> {
    localStorage.setItem('todo-list', JSON.stringify(todos));
    return of(undefined).pipe(delay(300));
  }

  loadTodos(): Observable<Todo[]> {
    const todosJSON = window.localStorage.getItem('todo-list');
    const result = todosJSON ? JSON.parse(todosJSON) : [];
    return of(result).pipe(delay(300));
  }

  addTodo(data: Todo) {
    return this.loadTodos().pipe(
      switchMap((todos) => {
        return this.setTodos([...todos, data]);
      })
    );
  }

  editTodo(data: Todo) {
    return this.loadTodos().pipe(
      switchMap((todos) => {
        const item = todos.find(x => x.id === data.id) as Todo;
        item.name = data.name; 
        return this.setTodos(todos);
      })
    );
  }
}
