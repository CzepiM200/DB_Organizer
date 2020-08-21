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

export const setDatesData = (data: any) => {
  return {
    type: "SETDATESDATA",
    payload: data,
  };
};

export const setFinancesData = (data: any) => {
  return {
    type: "SETFINANCESDATA",
    payload: data,
  };
};

export const setRoomsData = (data: any) => {
  return {
    type: "SETROOMSDATA",
    payload: data,
  };
};

export const setBillsData = (data: any) => {
  return {
    type: "SETBILLSDATA",
    payload: data,
  };
};

export const setFuelData = (data: any) => {
  return {
    type: "SETFUELDATA",
    payload: data,
  };
};

export const setDataLoaded = () => {
  return {
    type: "DATALOADED",
  };
};
