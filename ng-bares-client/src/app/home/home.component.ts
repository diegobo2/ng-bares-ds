import {Component, OnInit} from '@angular/core';
import {Bar} from '../shared/bar';
import {BarService} from '../shared/bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bars: Bar[]=[];
  constructor(private barService: BarService) { }

  ngOnInit() {
   this.barService.getBars().subscribe(
    (data: Bar[]) => this.bars = data
   );
  }
}
