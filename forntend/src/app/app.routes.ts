import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { FoodcartComponent } from './foodcart/foodcart.component';

export const routes: Routes = [{
    path:'',component:HomeComponent 

},
{
   path:'search/:sreachItem',component:HomeComponent
},{
    path:'tag/:tag',component:HomeComponent
},{
    path:'food/:id',component:FoodpageComponent
},{
    path:'foodcart',component:FoodcartComponent
}
];
