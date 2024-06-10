import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
// import { FormControl } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { TagsComponent } from "../tags/tags.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, NgbRating, SearchComponent, TagsComponent,RouterLink]
})
export class HomeComponent implements OnInit{
  
  foods : Foods[]=[]
ratingcontrol: any;
  constructor(private fs:FoodService,private router:ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.foods= this.fs.getAll()
   this.router.params.subscribe(params =>{
    if(params['sreachItem'])
      this.foods=this.fs.getAll().filter(food =>food.name.toLocaleLowerCase().includes(params['sreachItem'].toLocaleLowerCase()))
    else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
    
    else
    this.foods=this.fs.getAll()
   })
  }
 
}
function elseif() {
  throw new Error('Function not implemented.');
}

