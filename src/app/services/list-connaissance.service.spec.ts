import { TestBed } from '@angular/core/testing';

import { ListConnaissanceService } from './list-connaissance.service';
import {HttpClientModule} from "@angular/common/http";

describe('ListConnaissanceService', () => {
  let service: ListConnaissanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(ListConnaissanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
