/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Dashboard from './Pages/DashboardPage';
import NavBar from './Pages/NavBar';
import Asset from './Pages/Asset';
import Form from './Pages/Form';
import LoginForm from './LoginForm/LoginForm';
import Profile from './Pages/ProfilePage';
import Register from './Pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const TableContext = createContext();

function App() {
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() =>{
    var data = localStorage.getItem('userInfo');
    console.log(data)
    if(data != null){
      setUserDetails(data);
      console.log(data)
    }
  },[])
  return (
      // <HomePage> </HomePage>
      <>
          <TableContext.Provider value={{ tableHeaders, setTableHeaders, tableData, setTableData, userDetails, setUserDetails }}>

<Router>
  <div>
    {userDetails == null ? null :<NavBar />}
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/asset" element={<Asset/>} />
      <Route path="/form" element={<Form/>} /> 
      <Route path="/" element={<LoginForm/>} />
       </Routes>

  </div>
</Router>
</TableContext.Provider>
    </>
  );
}

export default App;
