import NavBar from "./NavBar";
import React, { useEffect, useState, useContext } from "react";
import { TableContext } from "../App";

function Form(props) {
  const { tableHeaders, tableData, setTableData, setTableHeaders } =
    useContext(TableContext);

  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [hostname, setHostname] = useState("");
  const [asset, setAsset] = useState("");
  const [vpn, setVpn] = useState("");
  const [pki, setPki] = useState("");

  useEffect(() => {
    if (localStorage.getItem("tableData") != null) {
      const headers = localStorage.getItem("tableHeaders").split(",");
      const fakeData = localStorage.getItem("tableData").split(",");
      const allData = [];

      for (let i = 0; i < fakeData.length; i += 7) {
        allData.push(fakeData.slice(i, i + 7));
      }

      setTableData(allData);
      setTableHeaders(headers);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFillForm = () => {
    for (let i = 0; i < tableData.length; i++) {
      for (let a = 0; a < tableData[i].length; a++) {
        if (tableData[i][a] === name) {
          setID(tableData[i][1]);
          setHostname(tableData[i][2]);
          setAsset(tableData[i][3]);
          setVpn(tableData[i][4]);
          setPki(tableData[i][5]);
        }
      }
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="p-4">
          {id === "" ? (
            <>
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={name}
                onChange={handleNameChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm text-center"
              />
              <button
                onClick={handleFillForm}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Fill Form
              </button>
            </>
          ) : (
            <div className="bg-white p-4 rounded-md drop-shadow-md">
              <div className="flex justify-center w-full" style={{ borderBottom: "1px solid grey" }}>
                <p className="font-semibold text-l">Header Of Form</p>
              </div>
              <div className="border border-gray-300 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-center">
                    <label className="border-2 w-40 border-solid border-gray-300 p-1 flex items-center justify-center">
                      ID
                    </label>
                  </div>
                  <div>
                    <input className="bg-transparent w-full border-solid border-2 border-gray-300 p-1 text-center" value={id} />
                  </div>

                  <div className="pt-4 flex justify-center">
                    <label className="border-2 w-40 border-solid border-gray-300 p-1 flex items-center justify-center">Hostname</label>
                  </div>
                  <div className="pt-4">
                    <input className="bg-transparent w-full border-solid border-2 border-gray-300 p-1 text-center" value={hostname}></input>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <label className="border-2 w-40 border-solid border-gray-300 p-1 flex items-center justify-center">Asset Tag</label>
                  </div>
                  <div className="pt-4">
                    <input className="bg-transparent w-full border-solid border-2 border-gray-300 p-1 text-center" value={asset}></input>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <label className="border-2 w-40 border-solid border-gray-300 p-1 flex items-center justify-center">VPN Token</label>
                  </div>
                  <div className="pt-4">
                    <input className="bg-transparent w-full border-solid border-2 border-gray-300 p-1 text-center" value={vpn}></input>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <label className="border-2 w-40 border-solid border-gray-300 p-1 flex items-center justify-center">PKI Card</label>
                  </div>
                  <div className="pt-4">
                    <input className="bg-transparent w-full border-solid border-2 border-gray-300 p-1 text-center" value={pki}></input>
                  </div>
                </div>
              </div>
              <button
                onClick={null}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setID("")}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-blue-600"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Form;
