import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from "./components/Signup";
import Curation from "./components/Curation";
import Explore from "./components/Explore";
import { type Movie } from "./components/MovieData";
import MovieModal from "./components/Moviemodal";
import Player from "./components/Player";
import Funding from "./components/Funding";
import FundingEx from "./components/FundingEx";
import About from "./components/About";






function App() {
  const [count, setCount] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // 모달에 띄울 영화 정보 저장

  const handleLogin = () => setIsLoggedIn(true); // 로그인 처리 함수

  const handleLogout = () => setIsLoggedIn(false); // 로그아웃 처리 함수

  const openModal = (movie: Movie) => setSelectedMovie(movie);

  const closeModal = () => setSelectedMovie(null);

  return (
    <>
      {/* Header가 BrowserRouter 안에 있으므로 useLocation() 사용 가능 */}
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* 메인 페이지 컴포넌트를 여기에 연결하세요 */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
        <Route path="/curation" element={<Curation onMovieClick={openModal} />} />
        <Route path="/explore" element={<Explore onMovieClick={openModal} />} />
        <Route path="/player/:movieId" element={<Player />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/funding/:id" element={<FundingEx />} />
        <Route path="/about/" element={<About />} />
       
      </Routes>
      <Footer />
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={closeModal} 
          onMovieClick={openModal}
        />
      )}
    </>
  );
}

export default App;
