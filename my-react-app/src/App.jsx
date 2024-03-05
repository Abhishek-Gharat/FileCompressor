import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import MainPage from "./Component/mainpage";
import Compress from "./Component/Compress";
import DragAndDrop from "./Component/DragAndDrop";
import Processing from "./Component/Processing";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/DragAndDrop" element={<DragAndDrop />} />
          <Route path="/Compress" element={<Compress />} />
          <Route path="/Processing" element={<Processing/>}/>
\
        </Routes>
      </div>
    </Router>
  );
}

export default App;
