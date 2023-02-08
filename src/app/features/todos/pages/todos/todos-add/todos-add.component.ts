import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosFormComponent } from '../todos-form/todos-form.component';
import { Store } from '@ngrx/store';
import { TodosActions } from '../../../state';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todos-add',
  standalone: true,
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.scss'],
  imports: [CommonModule, TodosFormComponent],
})
export class TodosAddComponent {
  @Output() onClose = new EventEmitter();
  @ViewChild(TodosFormComponent) formComponent!: TodosFormComponent;

  constructor(private store: Store) {}

  handleAdd() {
    const formGroup = this.formComponent.formGroup;
    if (formGroup.invalid) return;
    this.store.dispatch(TodosActions.addTodo({ todo: new Todo(formGroup.value.name as string) }));
  }
}
