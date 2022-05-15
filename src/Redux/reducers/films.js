export const getFilms = () => ({
  type: "GET_FILMS",
});

export const setFilms = (user) => ({
  type: "SET_FILMS",
  user,
});

const initialState = {
  films: [],
};

const getFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILMS":
      return { ...state, films: action.user };
    default:
      return state;
  }
};

export default getFilmsReducer;
