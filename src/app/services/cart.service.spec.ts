import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Component } from '@angular/core';

describe('CartService', () => {
  let service: CartService;
  let productSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    productSpy = jasmine.createSpyObj('product', {
      id: 1,
      name: 'abc',
      price: 1,
      username: 'abc',
      amount: 0,
      filepath: 'www.abc.com'
    });
    service = new CartService();
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should add products', () => {
    service.addProduct(productSpy);
    expect(service).toBeTruthy();
  });

  it('should decrease products', () => {
    service.decreaseProduct(productSpy);
    expect(service).toBeTruthy();
  });

  it('should remove products', () => {
    service.removeProduct(productSpy);
    expect(service).toBeTruthy();
  });

});
