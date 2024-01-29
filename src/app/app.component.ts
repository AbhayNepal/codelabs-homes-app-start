import { Component, MissingTranslationStrategy } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template:
    `<main>
   <header class="brand-name"> 
   <img [routerLink]="['']" class="brand-logo" src="/assets/logo.svg"
   alt="logo" aria-hidden="true">
   <app-navbar style="position:absolute;padding-left: 75%; display: flexbox;"></app-navbar>
   </header> 
   <section class="content">
<router-outlet></router-outlet>
   </section>
   </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule,NavbarComponent]
})
export class AppComponent {
  title = 'homes';
}
