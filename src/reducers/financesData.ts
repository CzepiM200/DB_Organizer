const financesData = (state = [], action: any) => {
  switch (action.type) {
    case "SETFINANCESDATA":
      return action.payload;

    default:
      return state;
  }
};

export default financesData;
