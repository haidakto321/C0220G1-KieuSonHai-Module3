import { TestBed } from '@angular/core/testing';

import { TodoJsonService } from './todo-json.service';

describe('TodoJsonService', () => {
  let service: TodoJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
