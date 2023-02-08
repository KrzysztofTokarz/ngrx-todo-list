import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    'Load Todos': emptyProps(),
    'Load Todos Success': props<{ todoList: Todo[] }>(),
    'Select Todo': props<{ id: string }>(),
    'Add Todo': props<{ todo: Todo }>(),
    'Edit Todo Name': props<{ name: string }>(),
  },
});
