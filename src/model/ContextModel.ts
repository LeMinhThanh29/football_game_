import React from "react";
import { Player_Gamme } from "./Player";
export type ACTION_TYPE = { type: "ADD_PLAYER"; payload: Player_Gamme };

export interface InitialState {
  player: Player_Gamme[];
}
export const state: InitialState = {
  player: [],
};
export interface Store {
  initialState: InitialState;
  dispatch: React.Dispatch<ACTION_TYPE>;
}

export const reducer = (state: InitialState, action: ACTION_TYPE) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return {
        ...state,
        player: [...state.player, action.payload],
      };

    default:
      return state;
  }
};
