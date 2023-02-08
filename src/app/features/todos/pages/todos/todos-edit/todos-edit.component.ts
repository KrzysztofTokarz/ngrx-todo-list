import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosFormComponent } from '../todos-form/todos-form.component';
import { Store } from '@ngrx/store';
import { Todo } from '../../../models/todo';
import { selectSelectedTodo, TodosActions } from '../../../state';

@Component({
  selector: 'app-todos-edit',
  standalone: true,
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.scss'],
  imports: [CommonModule, TodosFormComponent],
})
export class TodosEditComponent {
  @Output() onClose = new EventEmitter();
  @ViewChild(TodosFormComponent) formComponent!: TodosFormComponent;

  selectedTodo$ = this.store.select(selectSelectedTodo)

  constructor(private store: Store) {}

  handleEdit() {
    const formGroup = this.formComponent.formGroup;
    if (formGroup.invalid) return;

    this.store.dispatch(TodosActions.editTodoName({ name: formGroup.value.name as string }));
  }
}
