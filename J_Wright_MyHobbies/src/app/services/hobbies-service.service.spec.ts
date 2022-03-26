import { TestBed } from '@angular/core/testing';

import { HobbiesService } from './hobbies-service.service';

describe('HobbiesServiceService', () => {
  let service: HobbiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
