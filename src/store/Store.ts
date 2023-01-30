import { createStore } from "redux";

interface InitialState {
  isOpen: boolean;
}

const initialState: InitialState = {
  isOpen: false,
};

function reducer(state = initialState, action: { type: string }): InitialState {
  switch (action.type) {
    case "TOGGLE_IS_OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
