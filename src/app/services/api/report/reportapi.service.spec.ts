import { TestBed, inject } from '@angular/core/testing';

import { ReportapiService } from './reportapi.service';

describe('ReportapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportapiService]
    });
  });

  it('should be created', inject([ReportapiService], (service: ReportapiService) => {
    expect(service).toBeTruthy();
  }));
});
