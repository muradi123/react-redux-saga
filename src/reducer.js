const initialState = 0;

const addToSpecificNumber = (state = initialState, action) => {
  switch (action.type) {
    case "GROW_NUMBER":
      return state + action.payload;
    default:
      return state;
  }
};

export default addToSpecificNumber;
