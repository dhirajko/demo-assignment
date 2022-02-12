import React, { FC }  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Nav from "./component/navbar/nav";
import HomePage from "./container/home-page-container";
import AddPage from "./container/add-page-container";

const App: FC  = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/add" element={<AddPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
