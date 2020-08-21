const fuelData = (state = [], action: any) => {
  switch (action.type) {
    case "SETFUELDATA":
      return action.payload;

    default:
      return state;
  }
};

export default fuelData;
