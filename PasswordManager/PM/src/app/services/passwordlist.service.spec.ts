/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PasswordlistService } from './passwordlist.service';

describe('Service: Passwordlist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordlistService]
    });
  });

  it('should ...', inject([PasswordlistService], (service: PasswordlistService) => {
    expect(service).toBeTruthy();
  }));
});
