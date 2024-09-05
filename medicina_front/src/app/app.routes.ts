import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: "header", component: HeaderComponent}
];
