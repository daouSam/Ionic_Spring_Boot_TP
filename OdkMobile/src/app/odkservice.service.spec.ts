import { TestBed } from '@angular/core/testing';

import { OdkserviceService } from './odkservice.service';

describe('OdkserviceService', () => {
  let service: OdkserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdkserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
