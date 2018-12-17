import { TestBed, async, inject } from '@angular/core/testing';

import { EventrouterGuard } from './eventrouter.guard';

describe('EventrouterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventrouterGuard]
    });
  });

  it('should ...', inject([EventrouterGuard], (guard: EventrouterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
