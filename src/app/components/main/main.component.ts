import { Component, OnInit } from '@angular/core';
import { Top3ProductsComponent } from '../top-3-products/top-3-products.component';
import { SalesByCategoryComponent } from '../sales-by-category/sales-by-category.component';
import { SalesByOrderComponent } from '../sales-by-order/sales-by-order.component';
import { TotalSalesComponent } from '../total-sales/total-sales.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Top3ProductsComponent,SalesByCategoryComponent,SalesByOrderComponent,TotalSalesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }

}
