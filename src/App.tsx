import React, { FC }  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Nav from "./component/navbar/nav";
import HomePage from "./container/home-page-container";
import AddPage from "./container/add-page-container";
import NotFoundPage from './pages/shared/not-found-page';

const App: FC  = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/add" element={<AddPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
