import { ChangeDetectionStrategy, Component } from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
  templateUrl: './slots.view.html',
  styleUrls: ['./slots.view.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet
  ],
  standalone: true
})
export class SlotsView {
}
