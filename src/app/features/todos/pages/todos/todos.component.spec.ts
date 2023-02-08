import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPage } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosPage;
  let fixture: ComponentFixture<TodosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TodosPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
