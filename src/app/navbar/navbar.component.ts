import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  totalItems:any;
  constructor( private router:Router) { }

  ngOnInit(): void {
   
  }

  navigate(type:any){
    if(type == 'cart'){
      this.router.navigate(['/cart']);
    }
    else if(type == 'catalogue'){
      this.router.navigate(['/catalogue']);
    }
  }
}
