import "./_startPage.scss";
import React, { FunctionComponent } from "react";
import XLSX from "xlsx";
import { useDispatch } from "react-redux";
import {
  setMainData,
  setCadreData,
  setDatesData,
  setFinancesData,
  setRoomsData,
  setBillsData,
  setFuelData,
  setDataLoaded,
} from "../../actions/index";

type StartPageProps = {};

export const StartPage: FunctionComponent<StartPageProps> = (props: any) => {
  const dispatch = useDispatch();

  const PeselFix = (data: Array<any>): Array<any> => {
    for (let i = 1; i < data.length; i++) {
      data[i][0] = String(data[i][0]);
      while (data[i][0].length < 11) {
        data[i][0] = "0" + data[i][0];
      }
    }
    return data;
  };

  const handleFile = (file: any) => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e: any) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      /* Get worksheet names */
      const participantsSheetName = wb.SheetNames[0];
      const cadreSheetName = wb.SheetNames[1];
      const datesSheetName = wb.SheetNames[2];
      const financesSheetName = wb.SheetNames[3];
      const roomsSheetName = wb.SheetNames[4];
      const billsSheetName = wb.SheetNames[5];
      const fuelSheetName = wb.SheetNames[6];

      /* Get worksheet data */
      const participantsSheet = wb.Sheets[participantsSheetName];
      const cadreSheet = wb.Sheets[cadreSheetName];
      const datesSheet = wb.Sheets[datesSheetName];
      const financesSheet = wb.Sheets[financesSheetName];
      const roomsSheet = wb.Sheets[roomsSheetName];
      const billsSheet = wb.Sheets[billsSheetName];
      const fuelSheet = wb.Sheets[fuelSheetName];

      /* Convert array of arrays */
      let participantsData = XLSX.utils.sheet_to_json(participantsSheet, {
        header: 1,
      }) as Array<any>;
      let cadreData = XLSX.utils.sheet_to_json(cadreSheet, {
        header: 1,
      }) as Array<any>;
      let datesData = XLSX.utils.sheet_to_json(datesSheet, {
        header: 1,
      }) as Array<any>;
      let financesData = XLSX.utils.sheet_to_json(financesSheet, {
        header: 1,
      }) as Array<any>;
      let roomsData = XLSX.utils.sheet_to_json(roomsSheet, {
        header: 1,
      }) as Array<any>;
      let billsData = XLSX.utils.sheet_to_json(billsSheet, {
        header: 1,
      }) as Array<any>;
      let fuelData = XLSX.utils.sheet_to_json(fuelSheet, {
        header: 1,
      }) as Array<any>;

      participantsData = PeselFix(participantsData);

      /* Update redux state */
      dispatch(setMainData(participantsData));
      dispatch(setCadreData(cadreData));
      dispatch(setDatesData(datesData));
      dispatch(setFinancesData(financesData));
      dispatch(setRoomsData(roomsData));
      dispatch(setBillsData(billsData));
      dispatch(setFuelData(fuelData));
      dispatch(setDataLoaded());
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  };

  const onDragOver = (e: any) => {
    let event = e as Event;
    event.stopPropagation();
    event.preventDefault();
  };

  const onDragEnter = (e: any) => {
    let event = e as Event;
    event.stopPropagation();
  };

  const onFileDrop = (e: any) => {
    let event = e as Event;
    event.stopPropagation();
    event.preventDefault();

    const files = e.dataTransfer.files;
    files && files[0] && handleFile(files[0]);
  };

  return (
    <section className="drag-drop">
      <div
        className="drag-drop__platform"
        onDrop={onFileDrop}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
      >
        <p>Tutaj upuszczamy plik xlsx...</p>
      </div>
    </section>
  );
};
