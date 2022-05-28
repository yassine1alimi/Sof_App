import { TestBed } from '@angular/core/testing';

import { ReclamationClientService } from './reclamation-client.service';

describe('ReclamationClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReclamationClientService = TestBed.get(ReclamationClientService);
    expect(service).toBeTruthy();
  });
});
