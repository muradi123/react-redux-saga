export const Login = (payload) => ({
  type: "LOGINAUTH",
  payload,
});

export const Password = (payload) => ({
  type: "SHOWPASSWORD",
  payload,
});

const initialState = {
  login: "",
  password: "",
};

export const AuthReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "LOGINAUTH":
      return { ...state, login: actions.payload };
    case "SHOWPASSWORD":
      return { ...state, password: actions.payload };
    default:
      return state;
  }
};
