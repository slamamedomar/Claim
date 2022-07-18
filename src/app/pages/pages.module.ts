import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [

    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,

  ]
})
export class PagesModule { }
