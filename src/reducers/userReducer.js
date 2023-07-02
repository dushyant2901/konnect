export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_USERS":
      console.log({ payload });
      return { ...state, users: payload };

    default:
      break;
  }
  return state;
};
