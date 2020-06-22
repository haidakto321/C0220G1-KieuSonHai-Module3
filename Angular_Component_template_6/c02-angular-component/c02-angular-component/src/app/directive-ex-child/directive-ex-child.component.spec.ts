import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExChildComponent } from './directive-ex-child.component';

describe('DirectiveExChildComponent', () => {
  let component: DirectiveExChildComponent;
  let fixture: ComponentFixture<DirectiveExChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveExChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
