import { TestBed, inject } from '@angular/core/testing';

import { EtbMailboxManagerServiceService } from './etb.mailbox-manager-service.service';

describe('EtbMailboxManagerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtbMailboxManagerServiceService]
    });
  });

  it('should be created', inject([EtbMailboxManagerServiceService], (service: EtbMailboxManagerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
