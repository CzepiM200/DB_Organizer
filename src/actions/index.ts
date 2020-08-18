export const setMainData = (data: any) => {
  return {
    type: "SET",
    payload: data,
  };
};

export const setDataLoaded = () => {
  return {
    type: "DATALOADED",
  };
};
