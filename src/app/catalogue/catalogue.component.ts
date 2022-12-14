import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {

  products: any;
  cartItems:any;
  itemInCart:any;

  constructor(private productService: ProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res:any)=>{
      this.products = res;
    })
    

    
  }

  addItemsToCart(product:any, type:any){
    debugger;

    this.cartService.addItemsToCart(product,type);

    this.products[product.id-1].itemInCart = true;

    console.log(this.products)
  }

  incrementQuantity(product:any){
    this.addItemsToCart(product,'increment');
  }
  decrementQuantity(product:any){
    this.addItemsToCart(product,'decrement');
    if(this.products[product.id-1].quantity==0){
      this.products[product.id-1].itemInCart =false;
    }
  }
}
