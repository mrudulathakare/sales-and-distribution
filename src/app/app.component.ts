import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase-init';
import { AuthService } from './Auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,HeaderComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'sales-distribution-client';

  constructor (private authService: AuthService) {

  }

  ngOnInit(): void {
    initializeApp(firebaseConfig);
    this.authService.initAuthStateListener();
  }
}
