import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { reducer as mouseReducer } from './store/mouse.reducer';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore({ mouse: mouseReducer })],
};
