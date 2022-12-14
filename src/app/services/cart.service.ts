import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: any = [];
  totalAmount=0;
  totalItems = 0;

  constructor() { }

  addItemsToCart(item:any,type:any){ 
  //  debugger;
    var itemCheck = this.cartList.find((e:any)=>e.id == item.id);
    if(itemCheck && type == 'increment'){
      itemCheck.quantity++;   
     // this.cartList.push(item);
    }
    else if(itemCheck && type == 'decrement'){
      itemCheck.quantity--;
      if(itemCheck.quantity == 0){
        let index = this.cartList.findIndex((element:any) => element.id == item.id);
        this.cartList.splice(index, 1);
      }
    }
    else{
      item.quantity = 1;
     this.cartList.push(item);
    }
    this.calculateTotalAmount();
    this.getCartItems();
    this.getTotalAmount();
    this.getTotalItems();
  }

  calculateTotalAmount(){
    debugger;
    this.totalAmount = 0;
    this.cartList.forEach((item:any) => {
      this.totalAmount = this.totalAmount+ ( item.quantity * item.price);
    });
  }

  getCartItems(){
  //  console.log(this.cartList);
    return this.cartList;
  }

  getTotalAmount(){
   // console.log(this.totalAmount);
    return this.totalAmount;
  }

  getTotalItems(){
    this.cartList.forEach((prod:any) => {
      this.totalItems += prod.quantity;
   });
   //console.log(this.totalItems);
   return this.totalItems;
  }

  deleteFromCart(prod:any){
    let index = this.cartList.findIndex((element:any) => element.id == prod.id);
    this.cartList.splice(index, 1);
    this.calculateTotalAmount();


  }

}
