import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  providers: [FormBuilder],
})
export class ComponentsModule {
}
