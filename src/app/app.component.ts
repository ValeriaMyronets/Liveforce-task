import { ChangeDetectionStrategy, Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MousePositionComponent } from './mouse-position/mouse-position.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MousePositionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test-task';
}
