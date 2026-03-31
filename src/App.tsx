import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup_1 from "./components/Signup_1";
import Signup_2 from "./components/Signup_2";
import Signup_3 from "./components/Signup_3";






function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header가 BrowserRouter 안에 있으므로 useLocation() 사용 가능 */}
      <Header />
      <Routes>
        {/* 메인 페이지 컴포넌트를 여기에 연결하세요 */}
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<div>sub Page Content</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup_1" element={<Signup_1 />} />
        <Route path="/signup_2" element={<Signup_2 />} />
        <Route path="/signup_3" element={<Signup_3 />} />
        {/* <Route path="/curation" element={<div>Curation Page Content</div>} />
        <Route path="/explore" element={<div>Explore Page Content</div>} />
        <Route path="/funding" element={<div>Funding Page Content</div>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
