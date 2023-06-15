import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/components/home/home.component';
import { UploadProductsComponent } from './core/admin/components/upload-products/upload-products.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, title: 'Segundazo papá' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'nuevo', component: UploadProductsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
