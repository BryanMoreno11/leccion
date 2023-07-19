import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
{path:'about' ,component:AboutComponent},
{path:'rutas',component:RutasComponent},
{path: 'ruta/:id', component: RutaComponent},
{path:"**",pathMatch:'full', redirectTo: 'about'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
