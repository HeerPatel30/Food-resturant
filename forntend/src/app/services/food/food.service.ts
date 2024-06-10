import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tags } from '../../shared/models/tags';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getfoodbyid(id:number):Foods{
    return this.getAll().find(food=> food.id == id)!;
  }
  getAllFoodByTag(tag:string):Foods[]{
    if(tag == 'All'){
      return this.getAll()  
    }
    else 
    {
      return this.getAll().filter(food=>food.tags?.includes(tag))
    }
  }

  getAllTag():Tags[]{
    return[
      {
        name:'All',count:(8)
      },{
        name:'pasta',count:(5)
      },{
        name:'fries',count:(2)
      },{
        name:'hamburger',count:(4)
      },{
        name:'noodles',count:(4)
      }]
  }
  getAll():Foods[]{
    return[
    {
      id:1,
      name:"Cheese-Burger",
      price: 100,
      cooktime:'10-15mins',
      favorite:false,
      origin:['America'],
      star:5.0,
      imageurl:"./assets/food1.jpeg",
      tags:['Burger','Pizza','hamburger']
    },
    
    {
      id:2,
      name:"Magherita-Pizza",
      price:250,
      cooktime:'20-25mins',
      favorite:false,
      origin:['Italy'],
      star:4.0,
      imageurl:"./assets/food2.jpg",
      tags:['Burger','Pizza','hamburger']
    },
    
    {
      id:3,
      name:"French Fries",
      price: 100,
      cooktime:'10-15mins',
      favorite:false,
      origin:['America'],
      star:4.0,
      imageurl:"./assets/food3.jpg",
      tags:['Sandwich','fries','pasta']
    },
    
    {
      id:4,
      name:"Hamburger",
      price: 100,
      cooktime:'20-25mins',
      favorite:false,
      origin:['Mexican'],
      star:4.0,
      imageurl:"./assets/food4.jpg",
      tags:['Burger','Pizza','hamburger']
    },
    
    {
      id:5,
      name:"Noodles",
      price: 120,
      cooktime:'10-15mins',
      favorite:true,
      origin:['China'],
      star:4.0,
      imageurl:"./assets/food5.jpg",
      tags:['panner','pasta','noodles']
    },
    {
      id:6,
      name:"Wraps",
      price: 150,
      cooktime:'30-25mins',
      favorite:false,
      origin:['Mexican'],
      star:4.0,
      imageurl:"./assets/food6.jpg",
      tags:['Sandwich','pasta','noodles']
    },
    
    {
      id:7,
      name:"Panner",
      price: 180,
      cooktime:'10-15mins',
      favorite:false,
      origin:['India'],
      star:5,
      imageurl:"./assets/food7.jpg",
      tags:['Sandwich','panner','pasta','noodles']
    },
    
    {
      id:8,
      name:"Pasta",
      price: 250,
      cooktime:'10-15mins',
      favorite:false,
      origin:['Italy'],
      star:4.0,
      imageurl:"./assets/food8.jpg",
      tags:['Sandwich','Burger','Pizza','hamburger','fries','panner','pasta','noodles']
    },
    
    
    ]
  }
    
  
}
