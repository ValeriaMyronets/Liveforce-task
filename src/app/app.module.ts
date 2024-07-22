import { StoreModule } from '@ngrx/store';
import { reducer as mouseReducer } from './store/mouse.reducer';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations:  [ AppComponent ],
  imports: [
    StoreModule.forRoot({ mouse: mouseReducer })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
