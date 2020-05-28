import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

export interface MyData {
  name: string;
  filepath: string;
  price: number;
  author: string; 
  likes: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  images: Observable<MyData[]>;

 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0); //updates the number in this particular place
  amount = 0;
  constructor() {  }
 
  getProducts() {
    return this.images;

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
        this.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.amount -= 1;
        if (this.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - this.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}