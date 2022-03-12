import { TestBed } from '@angular/core/testing';

import { HobbiesServiceService } from './hobbies-service.service';

describe('HobbiesServiceService', () => {
  let service: HobbiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
