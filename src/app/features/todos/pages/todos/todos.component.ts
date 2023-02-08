import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { Store } from '@ngrx/store';
import { selectSelectedTodo, selectSelectedTodoId, selectTodoList, TodosActions } from '../../state';
import { TodosAddComponent } from './todos-add/todos-add.component';
import { Todo } from '../../models/todo';
import { TodosEditComponent } from "./todos-edit/todos-edit.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    imports: [CommonModule, TodosListComponent, TodosAddComponent, TodosEditComponent]
})
export class TodosPage implements OnInit {
  todos$ = this.store.select(selectTodoList);
  selectedTodo$ = this.store.select(selectSelectedTodo);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodosActions.loadTodos());
  }

  selectTodo(item: Todo) {
    this.store.dispatch(TodosActions.selectTodo({ id: item.id }));
  }
}
