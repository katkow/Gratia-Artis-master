import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number,
  author: string;
  desc: string;
  price: number
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  data: Product[] = [
    { id: 0, author: 'tester', desc: 'kolaż', price: 599 },
    { id: 1, author: 'test', desc: 'plakat', price: 650 },
    { id: 2, author: 'tester', desc: 'obraz', price: 599 },
    { id: 3, author: 'test', desc: 'rysunek', price: 650 },
  ];

 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0); //updates the number in this particular place
 
  constructor() {  }
 
  getProducts() {
    return this.data;

  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
  
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}