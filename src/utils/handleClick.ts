import { store } from "../store/Store";

export const handleClick = () => {
  store.dispatch({ type: "TOGGLE_IS_OPEN" });
};
