import { Routes } from '@angular/router';
import { UserRegistration } from './user-registration/user-registration';
import { Home } from './home/home';

export const routes: Routes = [

{
    path:"",
    component:UserRegistration
},
{
    path:"home",
    component:Home
}

];
