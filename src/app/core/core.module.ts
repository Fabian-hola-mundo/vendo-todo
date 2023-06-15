import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import {MatRipple, MatRippleModule} from '@angular/material/core';
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
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FirstStepComponent } from './admin/components/first-step/first-step.component';
import { SecondStepComponent } from './admin/components/second-step/second-step.component';
import { ThirdStepComponent } from './admin/components/third-step/third-step.component';
import { ViewImagesComponent } from './home/components/product/view-images/view-images.component';
import {MatDialogModule} from '@angular/material/dialog';

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
  MatStepperModule,
  MatSelectModule,
  MatIconModule,
  RouterLink,
  MatDialogModule,
]

const COMPONENTS = [
  HomeComponent,
  UploadProductsComponent
]

@NgModule({
  declarations: [
    COMPONENTS,
    ProductComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    ViewImagesComponent,
  ],
  imports: [
    CommonModule,
    MATERIALCOMPONENTS,
    MATERIALCDK,

  ],
  providers: [],
})
export class CoreModule { }
