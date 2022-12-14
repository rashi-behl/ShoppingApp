import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems:any;
  cartItemCount:any;
  totalAmount:any;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartItemCount = this.cartService.getTotalItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }

}
