import { Foods } from './food';

export class Cartitem {
  constructor(public food: Foods) {
    this.quantity = 1;
    this.price = food.price;
  }

  quantity: number;
  price: number;
}
