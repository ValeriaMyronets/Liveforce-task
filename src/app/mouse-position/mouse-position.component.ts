import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { distinctUntilChanged, fromEvent, Subscription, throttleTime } from 'rxjs';
import { State } from '../store/mouse.reducer';
import { toggleTracking } from '../store/mouse.actions';

@Component({
  selector: 'app-mouse-position',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-position.component.html',
  styleUrl: './mouse-position.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MousePositionComponent implements AfterViewInit, OnDestroy {
  public isTracking: boolean = true;
  public mouseX: number = 0;
  public mouseY: number = 0;

  constructor(private store: Store<{mouse: State}>) { }

  @ViewChild('clickButton', { static: true })
  private button!: ElementRef;
  private subscription!: Subscription;


  public ngAfterViewInit() {
    this.subscription = fromEvent(this.button.nativeElement, 'click')
      .pipe(
        distinctUntilChanged(),
        throttleTime(100)
      )
      .subscribe(() => {
        console.log(1);

        this.store.dispatch(toggleTracking());
      });
      console.log(this.store);

    this.subscription.add(this.store.select((state) => state.mouse.tracking).subscribe(isTracking => {
      this.isTracking = isTracking;
    }));
  }

  @HostListener('document:mousemove', ['$event'])
  public onMouseMove(event: MouseEvent) {
    if (this.isTracking) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
