import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'list-page', component: ListPageComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'edit-post', component: EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
