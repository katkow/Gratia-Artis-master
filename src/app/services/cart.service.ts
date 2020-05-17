import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // data: Product[] = [
  //   { id: 0, author: 'Pizza Salami', desc: 8.99, likes: 0 },
  //   { id: 1, author: 'Pizza Classic', desc: 5.49, likes: 0 },
  //   { id: 2, author: 'Sliced Bread', desc: 4.99, likes: 0 },
  //   { id: 3, author: 'Salad', desc: 6.99, likes: 0 }
  // ];

  private productsCollection = this.afs.collection<any>('Products');
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor(private afs: AngularFirestore) {
    
  }
 
  getProducts() {
    //return this.productsCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();

    //       return { ...data };
    //     });
    //   })
    // );
    return this.productsCollection;

  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
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