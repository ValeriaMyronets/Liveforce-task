import { Action, createReducer, on } from '@ngrx/store';
import * as MouseActions from './mouse.actions';

export interface State {
  tracking: boolean;
}

const initialState: State = {
  tracking: true,
};

const mouseReducer = createReducer(
  initialState,
  on(MouseActions.toggleTracking, (state) => ({ ...state, tracking: !state.tracking })),
);

export function reducer(state: State | undefined, action: Action) {
  return mouseReducer(state, action);
}
