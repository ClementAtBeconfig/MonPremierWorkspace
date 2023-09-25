import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from 'libs/ma-premiere-lib/src/lib/login/login.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },

  
];