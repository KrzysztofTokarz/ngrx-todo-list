import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { TodosEffects } from './app/features/todos/state';
import { todosReducer } from './app/features/todos/state/todos.reducer';
import { AppRoutes } from './app/shared/routes';

const routes: Routes = [
  {
    path: AppRoutes.Login,
    loadComponent: () => import('./app/features/users/pages/login/login.component').then((m) => m.LoginPage),
  },
  {
    path: AppRoutes.Todos,
    loadComponent: () => import('./app/features/todos/pages/todos/todos.component').then((m) => m.TodosPage),
  },
  { path: '**', redirectTo: AppRoutes.Todos },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ todos: todosReducer }),
    provideEffects(TodosEffects),
  ],
}).catch((err) => console.error(err));
