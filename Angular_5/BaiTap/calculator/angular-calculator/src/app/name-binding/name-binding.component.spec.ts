import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameBindingComponent } from './name-binding.component';

describe('NameBindingComponent', () => {
  let component: NameBindingComponent;
  let fixture: ComponentFixture<NameBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
