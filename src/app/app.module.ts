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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

const MATERIALCOMPONENTS = [
  MatButtonModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule
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
    MATERIALCDK,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())

  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
