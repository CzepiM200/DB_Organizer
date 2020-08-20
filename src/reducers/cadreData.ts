const cadreData = (state = [], action: any) => {
  switch (action.type) {
    case "SETCADREDATA":
      return action.payload;

    default:
      return state;
  }
};

export default cadreData;
