import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/components/header/header.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/layout/components/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkMenuModule} from '@angular/cdk/menu';

const MATERIALCOMPONENTS = [
  MatButtonModule,
  BrowserAnimationsModule,
  MatButtonModule
]

const MATERIALCDK = [
  CdkMenuModule
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MATERIALCOMPONENTS,
    MATERIALCDK

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
