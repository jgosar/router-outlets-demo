import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  templateUrl: './router-outlet-1.router-outlet.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
// eslint-disable-next-line  @angular-eslint/component-class-suffix
export class RouterOutlet1{
}
