import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/components/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, title: 'Telecafe - Inicio' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
