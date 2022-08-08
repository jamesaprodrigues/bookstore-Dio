import { TestBed } from '@angular/core/testing';

import { ProductListComponentServiceTsService } from './product-list.component.service';

describe('ProductListComponentServiceTsService', () => {
  let service: ProductListComponentServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListComponentServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
