import { Component, OnInit } from '@angular/core';
import { BarService } from '../shared/bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private barService: BarService, private router: Router) { }

  ngOnInit() {
  }

  newBar(){
      // Get max product Id from the product list
      this.barService.getMaxBarId().subscribe(
        data => this.id = data
      );
      this.router.navigate(['/bars', this.id, 'new'])

  }

}
