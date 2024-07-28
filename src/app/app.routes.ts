import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './Auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        title: 'Home',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent,
    },
    {
        path: 'register',
        title: 'Register',
        component: RegisterComponent
    }
];
