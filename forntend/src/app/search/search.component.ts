import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel is part of FormsModule
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'] // Corrected to `styleUrls` (plural)
})
export class SearchComponent implements OnInit {
  searchItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchItem = params['searchItem'] || '';
      console.log(this.searchItem);
    });
  }

  onSearch(): void {
    if (this.searchItem) {
      this.router.navigateByUrl(`/search/${this.searchItem}`);
    }
  }
}
