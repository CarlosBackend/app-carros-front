import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CarrosListComponent } from './components/carros/carros-list/carros-list.component';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';
import { MarcaslistComponent } from './components/marca/marcaslist/marcaslist.component';
import { MarcasdetailsComponent } from './components/marca/marcasdetails/marcasdetails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: PrincipalComponent,
    children: [
      { path: 'carros', component: CarrosListComponent },
      { path: 'carros/new', component: CarrosdetailsComponent },
      { path: 'carros/edit/:id', component: CarrosdetailsComponent },
      { path: 'marcas', component: MarcaslistComponent },
      { path: 'marcas/new', component: MarcasdetailsComponent },
      { path: 'marcas/edit/:id', component: MarcasdetailsComponent },
    ],
  },
];
