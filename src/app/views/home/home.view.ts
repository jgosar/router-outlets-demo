import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'fsss-home-view',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class HomeView {
}
