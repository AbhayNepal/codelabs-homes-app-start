import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="navbar">

  <div class="dropdown">
    <button class="dropbtn">
    <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).webp"
            class="userImage"
            height="22"
            alt=""
            loading="lazy"
          />
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Logout</a>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
