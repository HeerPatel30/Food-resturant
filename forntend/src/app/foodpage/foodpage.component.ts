import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TagsComponent } from "../tags/tags.component";
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-foodpage',
    standalone: true,
    templateUrl: './foodpage.component.html',
    styleUrl: './foodpage.component.css',
    imports: [NgbRating, CommonModule, TagsComponent]
})
export class FoodpageComponent {
  food!:Foods
  constructor(private activatedRoute:ActivatedRoute,private foodservice:FoodService, private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if (params['id']) 
        this.food = this.foodservice.getfoodbyid(params['id']);
      })
    }
    addtocart(){
      this.cartService.addtocart(this.food)
      this.router.navigateByUrl('/foodcart')
    }
  }

