import {Component, OnInit} from '@angular/core';
import {BarService} from '../shared/bar.service';
import {Bar} from '../shared/bar';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.css']
})
export class BarDetailComponent implements OnInit {

  bar: Bar;
  barId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private barService: BarService) {}

  ngOnInit() {
    this.barId = parseInt(this.activatedroute.snapshot.params['barId']);
    this.barService.getBarById(this.barId).subscribe(
      (data: Bar) => this.bar = data
    );
  }
  goEdit():void{
    this.router.navigate(['/bars', this.barId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
