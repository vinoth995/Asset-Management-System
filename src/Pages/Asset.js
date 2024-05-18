import NavBar from "./NavBar";
import Chart from "chart.js/auto";
import React, { useEffect, useState, useContext } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import * as XLSX from "xlsx";
import { TableContext } from "../App";

function Asset(props) {
  const { tableHeaders, tableData, setTableData, setTableHeaders } =
    useContext(TableContext);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming there is only one sheet in the workbook
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert the worksheet to an array of objects
      const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Extract headers from the first row
      const headers = sheetData[0];

      // Remove potential whitespaces from headers
      const cleanedHeaders = headers.map((header) => header.trim());

      // Remove headers row from data
      const dataWithoutHeaders = sheetData.slice(1);

      setTableHeaders(cleanedHeaders);
      setTableData(dataWithoutHeaders);
      localStorage.setItem("tableHeaders", cleanedHeaders);
      localStorage.setItem("tableData", dataWithoutHeaders);
    };

    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    if (localStorage.getItem("tableData") != null) {
      console.log(localStorage.getItem("tableHeaders"));
      var headers = [];
      var data = [];
      var allData = [];
      var fakeHeader = localStorage.getItem("tableHeaders").split(",");
      for (var i = 0; i < fakeHeader.length; i++) {
        headers.push(fakeHeader[i]);
      }

      var fakeData = localStorage.getItem("tableData").split(",");
      for (var i = 0; i < fakeData.length; i = i + 7) {
        data = [];
        data.push(fakeData[i]);
        data.push(fakeData[i + 1]);
        data.push(fakeData[i + 2]);
        data.push(fakeData[i + 3]);
        data.push(fakeData[i + 4]);
        data.push(fakeData[i + 5]);
        data.push(fakeData[i + 6]);
        allData.push(data);
      }
      setTableData(allData);
      setTableHeaders(headers);
    }
  });

  return (
    <>
      {/* Container for Rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* First Row - Charts */}
        <input
          type="file"
          accept=".xlsx"
          onChange={handleFileUpload}
          className="my-6 p-2 border rounded"
        />
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                {tableHeaders.map((indivHeader) => {
                  return <th className="px-6 py-2">{indivHeader}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {tableData.map((indivData) => {
                return (
                  <tr>
                    {indivData.map((indivDatapart2) => {
                      return (
                        <td className="border px-6 py-2">{indivDatapart2}</td>
                      );
                    })}
                  </tr>
                );
              })}

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Asset;
