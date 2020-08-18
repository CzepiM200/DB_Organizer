const usersMainDataReducer = (state = [], action: any) => {
  switch (action.type) {
    case "SET":
      return action.payload;

    default:
      return state;
  }
};

export default usersMainDataReducer;
