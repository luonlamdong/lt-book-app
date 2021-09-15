import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { ProductPage } from './product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}
