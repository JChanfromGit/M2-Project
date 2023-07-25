import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    HomePageComponent,
    ListPageComponent,
    AddEmployeeComponent,
    AboutPageComponent,
    NavBarComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
