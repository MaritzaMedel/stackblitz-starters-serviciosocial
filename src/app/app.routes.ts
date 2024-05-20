import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { GestionHorasComponent } from './gestion-horas/gestion-horas.component';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { CartaComponent } from './carta/carta.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gestion', component: GestionHorasComponent },
  { path: 'listAlumnos', component: AlumnoListComponent },
  //{ path: 'carta', component: CartaComponent },
];

/*export const rutasPrincipales: Routes = [
  { path: 'login', component: LoginComponent },
];*/
