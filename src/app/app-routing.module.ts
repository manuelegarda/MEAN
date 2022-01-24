import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'crear-producto',  component: CrearProductoComponent},
  {path: 'editar-producto/:id', component: ListarProductosComponent},
  {path: 'landing/:id', component: LandingComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
