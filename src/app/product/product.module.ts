import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { CardItemDetailComponent } from './components/card-item-detail/card-item-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    ProductCatalogComponent,
    CardItemDetailComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProductModule { }
