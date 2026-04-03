import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from "./components/Signup";
import Curation from "./components/Curation";




function App() {
  const [count, setCount] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태

  const handleLogin = () => setIsLoggedIn(true); // 로그인 처리 함수

  const handleLogout = () => setIsLoggedIn(false); // 로그아웃 처리 함수

  return (
    <>
      {/* Header가 BrowserRouter 안에 있으므로 useLocation() 사용 가능 */}
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* 메인 페이지 컴포넌트를 여기에 연결하세요 */}
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<div>sub Page Content</div>} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
        <Route path="/curation" element={<Curation />} />
        {/* <Route path="/curation" element={<div>Curation Page Content</div>} />
        <Route path="/explore" element={<div>Explore Page Content</div>} />
        <Route path="/funding" element={<div>Funding Page Content</div>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
