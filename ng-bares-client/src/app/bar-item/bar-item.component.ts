import {Component, Input} from '@angular/core';
import {Bar} from '../shared/bar';

@Component({
  selector: 'app-bar-item',
  templateUrl: './bar-item.component.html',
  styleUrls: ['./bar-item.component.css']
})
export class BarItemComponent {

  @Input() bar: Bar;
}
