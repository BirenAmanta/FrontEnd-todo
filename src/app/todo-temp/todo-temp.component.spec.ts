import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTempComponent } from './todo-temp.component';

describe('TodoTempComponent', () => {
  let component: TodoTempComponent;
  let fixture: ComponentFixture<TodoTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
