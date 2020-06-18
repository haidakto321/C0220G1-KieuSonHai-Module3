import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBarExampleComponent } from './rating-bar-example.component';

describe('RatingBarExampleComponent', () => {
  let component: RatingBarExampleComponent;
  let fixture: ComponentFixture<RatingBarExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingBarExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
