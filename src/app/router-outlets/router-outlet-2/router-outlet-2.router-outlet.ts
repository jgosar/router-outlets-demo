import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  templateUrl: './router-outlet-2.router-outlet.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
// eslint-disable-next-line  @angular-eslint/component-class-suffix
export class RouterOutlet2{
}
