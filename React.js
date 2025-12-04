import { render } from "./React-Dom.js";
import { Card } from "./App";

let states = [];
let stateIndex = 0;
export const React = {
  createElement(type, props, ...children) {
    const reactObject = {
      type,
      props: {
        ...props,
        children,
      },
    };
    return reactObject;
  },
  useState(initialState) {
    states[stateIndex] = states[stateIndex] ?? initialState;
    let localIndex = stateIndex;
    console.log(states);
    function setState(newState) {
      states[localIndex] = newState;
      stateIndex = 0;
      render(<Card />, document.querySelector("#root"));
    }
    stateIndex++;
    return [states[localIndex], setState];
  },
};
