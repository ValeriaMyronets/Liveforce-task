import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./mouse.reducer";


export const selectMouseState = createFeatureSelector<State>('mouse');

export const selectTracking = createSelector(
  selectMouseState,
  (state: State) => state.tracking
);
