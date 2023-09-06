import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToAllMembers() {
    this.router.navigate(['/allmember']);
  }

  navigateToAddMember() {
    this.router.navigate(['/member']);
  }

  

  navigateToAllAdmin() {
    this.router.navigate(['/alladmin']);
  }

  navigateToAddAdmin() {
    this.router.navigate(['/admin']);
  }

  

  navigateToAllEmployer() {
    this.router.navigate(['/allemployer']);
  }

  navigateToAddEmployer() {
    this.router.navigate(['/employer']);
  }

  navigateToAllSalle() {
    this.router.navigate(['/allsalle']);
  }

  navigateToAddSalle() {
    this.router.navigate(['/salle']);
  }
 

  



}
