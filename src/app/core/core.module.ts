import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { UploadProductsComponent } from './admin/components/upload-products/upload-products.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ProductComponent } from './home/components/product/product.component';
import {MatStepperModule} from '@angular/material/stepper';


const MATERIALCDK = [
  A11yModule
]

const MATERIALCOMPONENTS = [
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  FormsModule,
  TextFieldModule,
  ScrollingModule,
  MatBottomSheetModule,
  MatStepperModule
]

const COMPONENTS = [
  HomeComponent,
  UploadProductsComponent
]

@NgModule({
  declarations: [
    COMPONENTS,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    MATERIALCOMPONENTS,
    MATERIALCDK,

  ],
  providers: [],
})
export class CoreModule { }
