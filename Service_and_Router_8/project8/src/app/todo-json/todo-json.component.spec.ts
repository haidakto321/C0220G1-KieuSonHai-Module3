import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoJsonComponent } from './todo-json.component';

describe('TodoJsonComponent', () => {
  let component: TodoJsonComponent;
  let fixture: ComponentFixture<TodoJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
