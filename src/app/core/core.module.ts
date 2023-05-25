import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';


const MATERIALCDK = [
  A11yModule
]

const MATERIALCOMPONENTS = [
  MatCardModule,
  MatButtonModule,
  MatRippleModule
]

const COMPONENTS = [
  HomeComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MATERIALCOMPONENTS,
    MATERIALCDK,

  ],
  providers: [],
})
export class CoreModule { }
