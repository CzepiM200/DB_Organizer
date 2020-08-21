const billsData = (state = [], action: any) => {
  switch (action.type) {
    case "SETBILLSDATA":
      return action.payload;

    default:
      return state;
  }
};

export default billsData;
