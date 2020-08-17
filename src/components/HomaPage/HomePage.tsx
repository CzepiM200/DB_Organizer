import React, { FunctionComponent, useState } from "react";
import XLSX from "xlsx";

type HomePageProps = {};

export const HomePage: FunctionComponent<HomePageProps> = (props: any) => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [columns, setColumns] = useState([]);

  const handleFile = (file: any) => {
    console.log(file);
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
      console.log(dataTemp);
      setData(dataTemp);
      // this.setState({ data: data, cols: make_cols(ws["!ref"]) });
      console.log(data);
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
    <section>
      <div
        onDrop={onFileDrop}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
      >
        Tutaj upuszczamy plik xlsx...
      </div>
    </section>
  );
};
