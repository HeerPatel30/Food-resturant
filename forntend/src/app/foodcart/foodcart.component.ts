import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/cart';
import { Cartitem } from '../shared/models/cartitem';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-foodcart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './foodcart.component.html',
  styleUrls: ['./foodcart.component.css']
})
export class FoodcartComponent implements OnInit {
  cart!: Cart;
  // let foods=foodservice.
  
  constructor(private cartService: CartService, private cd: ChangeDetectorRef) {
    
    // let foods=foodser.getAll()
    // cartService.addtocart(foods[1])
    // cartService.addtocart(foods[2])
    this.setCart();
    }
    ngOnInit(): void {

  }

  setCart(): void {
    this.cart = this.cartService.getcart();
    this.cd.markForCheck(); // Ensure Angular detects changes
  }

  removeCart(cartItem: Cartitem): void {
    this.cartService.removecart(cartItem.food.id);
    this.setCart();
  }

  changequantity(cartItem: Cartitem, quantityInString: string): void {
    const quantity = parseInt(quantityInString, 10);
    this.cartService.changequantity(cartItem.food.id, quantity); // Updated method call
    this.setCart();
  }
}
