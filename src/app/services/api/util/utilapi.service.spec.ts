import { TestBed, inject } from '@angular/core/testing';

import { UtilapiService } from './utilapi.service';

describe('UtilapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilapiService]
    });
  });

  it('should be created', inject([UtilapiService], (service: UtilapiService) => {
    expect(service).toBeTruthy();
  }));
});
