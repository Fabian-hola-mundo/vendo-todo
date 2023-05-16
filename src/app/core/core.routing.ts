import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'inicio', component: HomeComponent, title: 'Telecafe - Inicio' },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
