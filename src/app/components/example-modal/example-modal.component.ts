import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink
  ],
  standalone: true
})
export class ExampleModalComponent{
}
