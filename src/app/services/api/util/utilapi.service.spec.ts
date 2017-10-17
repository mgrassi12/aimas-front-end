import { TestBed, inject } from '@angular/core/testing';

import { UtilAPIService } from './utilapi.service';

describe('UtilAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [UtilAPIService]
    });
  });

  it('should be created', inject([UtilAPIService], (service: UtilAPIService) => {
    expect(service).toBeTruthy();
  }));
});
