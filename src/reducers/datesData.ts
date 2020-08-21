const datesData = (state = [], action: any) => {
  switch (action.type) {
    case "SETDATESDATA":
      return action.payload;

    default:
      return state;
  }
};

export default datesData;
