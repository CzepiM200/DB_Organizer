const roomsData = (state = [], action: any) => {
  switch (action.type) {
    case "SETROOMSDATA":
      return action.payload;

    default:
      return state;
  }
};

export default roomsData;
