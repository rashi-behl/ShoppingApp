import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any;
  totalAmount:any = 0;
  cartItemCount:any = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {

    this.cartItems = this.cartService.getCartItems();
    this.cartItemCount = this.cartService.getTotalItems();
    this.totalAmount = this.cartService.getTotalAmount();
    //console.log(this.cartItems);
  }
  shopNow(){
    this.router.navigate(['/catalogue']);
  }
  confirmOrder(){
    this.router.navigate(['/checkout'])
  }
  deleteProduct(prod:any){
    this.cartService.deleteFromCart(prod);
    this.cartItems = this.cartService.getCartItems();
    this.cartItemCount = this.cartService.getTotalItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }
}
