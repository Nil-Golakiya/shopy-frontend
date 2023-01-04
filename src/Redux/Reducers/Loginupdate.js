const INITIAL_STATE = {};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
      };
    case "UPDATE_START":
      return {
        ...state,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default Reducer;
