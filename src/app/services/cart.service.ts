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
 
 
  addProduct(item) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === item.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      item.amount = 1;
      this.cart.push(item);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(item) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === item.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(item) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === item.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}