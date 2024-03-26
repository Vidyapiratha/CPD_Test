import "./App.css";
import React, { useState, useEffect } from "react";
import CustomizedTables from "./CustomTable";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch("/msc/course/list")
      .then((response) => {
        console.log(response, "resss");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(JSON.stringify(data, null, 2));
        setTableData([data.courses]);
        console.log(tableData, "tableData");

        console.log(data.courses, "data");
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // The empty array ensures this effect runs only once

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const courses = data.courses;
  console.log(courses, "courses");
  console.log(tableData, "tableData");

  return (
    <div>
      <h1>Fetched Data</h1>
      {/* Display your data here. Example: */}
      {/* <CustomizedTables tableData={courses}></CustomizedTables> */}
      <pre>{tableData}</pre>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>User List</h1>
      {/* <UserTable userList={users} /> */}
      <DataFetcher></DataFetcher>
      {/* <CustomizedTables></CustomizedTables> */}
    </div>
  );
}

export default App;
