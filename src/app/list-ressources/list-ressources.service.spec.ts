import { TestBed } from '@angular/core/testing';

import { ListRessourcesService } from './list-ressources.service';

describe('ListRessourcesService', () => {
  let service: ListRessourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRessourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
