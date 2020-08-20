export const setMainData = (data: any) => {
  return {
    type: "SET",
    payload: data,
  };
};

export const setCadreData = (data: any) => {
  return {
    type: "SETCADREDATA",
    payload: data,
  };
};

export const setDataLoaded = () => {
  return {
    type: "DATALOADED",
  };
};
