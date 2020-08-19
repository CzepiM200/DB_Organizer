import "./_startPage.scss";
import React, { FunctionComponent, useState } from "react";
import XLSX from "xlsx";
import { useDispatch } from "react-redux";
import { setMainData, setDataLoaded } from "../../actions/index";

type StartPageProps = {};

export const StartPage: FunctionComponent<StartPageProps> = (props: any) => {
  // const usersMainData = useSelector((state: any) => state.setMainData);

  const dispatch = useDispatch();

  const handleFile = (file: any) => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e: any) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const dataTemp = XLSX.utils.sheet_to_json(ws, {
        header: 1,
      }) as any;
      /* Update state */
      dispatch(setMainData(dataTemp));
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
