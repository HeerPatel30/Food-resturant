import { Component, OnInit, Input } from '@angular/core';
import { Tags } from '../shared/models/tags';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tag: Tags[] = [];
  @Input() 
  foodpagetag?: string[] = [];

  @Input()
  justifyContent?:string='center'
  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    if (!this.foodpagetag || this.foodpagetag.length === 0) {
      this.tag = this.fs.getAllTag();
    }
  }
}
