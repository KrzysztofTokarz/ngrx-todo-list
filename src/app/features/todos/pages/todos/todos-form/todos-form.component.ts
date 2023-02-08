import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todos-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosFormComponent implements OnChanges {
  @Input() todo: Todo | null = null;

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  ngOnChanges() {
    if (this.todo) {
      this.formGroup.patchValue(this.todo);
    }
  }
}
