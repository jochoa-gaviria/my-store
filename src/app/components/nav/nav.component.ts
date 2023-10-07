import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.model';
import { Product } from 'src/app/interfaces/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private catagoryService: CategoryService
  ) {}


  ngOnInit() : void {
    this.storeService.cart$.subscribe((products:Product[]) => {
      this.counter = products.length
    });
    this.getAllCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  getAllCategories() {
    this.catagoryService.getAll()
    .subscribe(data => {
      this.categories = data;
    });
  }
}
