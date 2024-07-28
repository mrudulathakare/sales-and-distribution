import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { MainComponent } from './app/components/main/main.component';
import { AuthGuard } from './app/Auth/auth.guard';
import { HeaderComponent } from './app/components/header/header.component';

 
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));