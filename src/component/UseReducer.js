//define the state and innitial function//
//inntial state and current//
const inntialState = 0;

const reducer = (state, action) => {
  //accept the current state and return new state//
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return inntialState;
    case "setValue":
      return state;
    default:
      return state;
  }
};

export { reducer, inntialState };
