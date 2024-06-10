import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { Cartitem } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addtocart(food: Foods): void {
    let CartItem = this.cart.items.find(item => item.food.id === food.id);
    if (CartItem) {
      this.changequantity(food.id, CartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new Cartitem(food));
  }

  removecart(foodid: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodid);
  }

  changequantity(foodid: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodid);
    if (cartItem) {
      cartItem.quantity = quantity;
      cartItem.price = cartItem.food.price * quantity;
    }
  }

  getcart(): Cart {
    return this.cart;
  }
}
