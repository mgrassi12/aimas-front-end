import { TestBed, inject } from '@angular/core/testing';

import { ReportAPIService } from './reportapi.service';

describe('ReportapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportAPIService]
    });
  });

  it('should be created', inject([ReportAPIService], (service: ReportAPIService) => {
    expect(service).toBeTruthy();
  }));
});
