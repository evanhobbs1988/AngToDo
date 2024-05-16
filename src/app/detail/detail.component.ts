import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  constructor(private router: Router) { }

  goTolist() {
    this.router.navigate(['/list']);
  }

}


