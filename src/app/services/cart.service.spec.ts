import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Component } from '@angular/core';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should add products', () => {
    const product = { id: 1};
    service.addProduct(product);
    expect(service).toBeTruthy();
  });

});
