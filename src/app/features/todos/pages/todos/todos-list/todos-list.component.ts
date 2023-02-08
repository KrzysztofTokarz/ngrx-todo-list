import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  @Input() items: readonly Todo[] = [];
  @Input() selectedTodo: Todo | null = null;
  @Output() onSelectTodo = new EventEmitter<Todo>();
}
