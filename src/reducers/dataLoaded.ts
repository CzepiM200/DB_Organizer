const dataLoaded = (state = false, action: any) => {
  switch (action.type) {
    case "DATALOADED":
      return true;

    default:
      return state;
  }
};

export default dataLoaded;
