import { TestBed } from '@angular/core/testing';

import { EventsResolverService } from './events-resolver.service';

describe('EventsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsResolverService = TestBed.get(EventsResolverService);
    expect(service).toBeTruthy();
  });
});
