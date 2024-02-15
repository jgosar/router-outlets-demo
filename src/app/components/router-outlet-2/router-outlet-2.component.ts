import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-router-outlet-2',
  templateUrl: './router-outlet-2.component.html',
  styleUrls: ['./router-outlet-2.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class RouterOutlet2Component{
}
